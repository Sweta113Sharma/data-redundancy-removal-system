import express from 'express';
import cors from 'cors';
import {
  initDatabase,
  queryAll,
  queryUnsafe,
  logSecurityEvent,
  getLogs,
  getRawUsersTable,
  decrypt,
  getContacts,
  getContactById,
  insertContact,
  updateContact,
  deleteContact,
  getPendingReviews,
  getPendingReviewById,
  insertPendingReview,
  deletePendingReview,
  getRedundancyLogs,
  logRedundancy
} from './db.js';
import {
  CAPABILITIES,
  generateCapabilityCode,
  verifyCapabilityCode,
  detectSQLInjection
} from './security.js';
import { evaluateContact } from './dedup.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Initialize Database on startup
await initDatabase().catch(err => {
  console.error('Failed to initialize database:', err);
});

// Endpoint: List available capabilities
app.get('/api/capabilities', (req, res) => {
  res.json({
    success: true,
    capabilities: Object.values(CAPABILITIES)
  });
});

// Endpoint: Generate a Capability Code (signed token) for a specific action
app.post('/api/capabilities/generate', (req, res) => {
  const { action } = req.body;
  try {
    const token = generateCapabilityCode(action);
    res.json({
      success: true,
      token,
      payload: CAPABILITIES[action]
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// Endpoint: Fetch security threat logs
app.get('/api/logs', async (req, res) => {
  try {
    const logs = await getLogs();
    res.json({ success: true, logs });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Endpoint: Fetch raw database state (to display the encrypted files on disk)
app.get('/api/database/raw', async (req, res) => {
  try {
    const rows = await getRawUsersTable();
    res.json({ success: true, rows });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Endpoint: Reset/Reseed Database
app.post('/api/database/reset', async (req, res) => {
  try {
    await initDatabase();
    res.json({ success: true, message: 'Database reset and reseeded successfully.' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Endpoint: Execute Database Query (incorporating the double-layer security controls)
app.post('/api/execute', async (req, res) => {
  const {
    query,
    params = [],
    capabilityCode = '',
    enableLayer1 = true, // Capability-based security toggle
    enableLayer2 = true  // AES-256 decryption toggle
  } = req.body;

  if (!query || typeof query !== 'string') {
    return res.status(400).json({ success: false, error: 'Query string is required.' });
  }

  let l1Status = 'PASSED';
  let l2Status = 'ACTIVE';
  let executionResult = null;
  let logId = null;

  try {
    // ==========================================
    // LAYER 1: CAPABILITY & PARAMETER FILTER
    // ==========================================
    if (enableLayer1) {
      if (!capabilityCode) {
        l1Status = 'FAILED (No Capability Code)';
        await logSecurityEvent(
          query,
          'BLOCKED',
          'Attempted to run query without a valid Capability Code token.',
          'Enforce Layer 1 check: execution terminated.'
        );
        return res.status(403).json({
          success: false,
          layer1: { status: l1Status, verified: false },
          error: 'Access Denied: Missing Capability Code token.'
        });
      }

      try {
        // Verify capability token signature and expiry
        const decodedToken = verifyCapabilityCode(capabilityCode);
        
        // Ensure the SQL execution structure matches the authorized template
        // We trim, standardize spacing, and check for equality.
        const cleanQuery = query.replace(/\s+/g, ' ').trim().toLowerCase();
        const cleanTemplate = decodedToken.template.replace(/\s+/g, ' ').trim().toLowerCase();

        if (cleanQuery !== cleanTemplate) {
          l1Status = 'FAILED (Template Mismatch / Tampered Query)';
          await logSecurityEvent(
            query,
            'BLOCKED',
            `Capability code was valid but the execution query did not match the template structure. Expected: "${decodedToken.template}"`,
            'Enforce Layer 1 query structure match: execution terminated.'
          );
          return res.status(403).json({
            success: false,
            layer1: { status: l1Status, verified: true },
            error: 'Access Denied: SQL query structure does not match the authorized capability code template.'
          });
        }

        // Run secured query using parameterized SQLite execution
        // SQLite will treat params strictly as variables, avoiding any injection risk
        executionResult = await queryAll(decodedToken.template, params);
        l1Status = 'VERIFIED & EXECUTED SECURELY';

      } catch (err) {
        l1Status = `FAILED (${err.message})`;
        await logSecurityEvent(
          query,
          'BLOCKED',
          `Capability code validation failed. Details: ${err.message}`,
          'Enforce Layer 1 security bounds: execution terminated.'
        );
        return res.status(401).json({
          success: false,
          layer1: { status: l1Status, verified: false },
          error: `Authentication Failure: ${err.message}`
        });
      }
    } else {
      // Layer 1 is disabled -> VULNERABLE RUN
      l1Status = 'BYPASSED (Layer 1 Disabled)';
      
      // Perform Intrusion Detection (IDS) check for logs
      const idsCheck = detectSQLInjection(query);
      
      if (idsCheck.detected) {
        // Attack detected but we allow it because the user disabled Layer 1
        await logSecurityEvent(
          query,
          'THREAT DETECTED',
          `SQL Injection heuristics triggered: ${idsCheck.reasons.join(', ')}. Query executed anyway due to Layer 1 bypass.`,
          'Alert generated. Allowed execution due to system configuration (Vulnerable Mode).'
        );
      } else {
        await logSecurityEvent(
          query,
          'UNAUDITED EXECUTION',
          'Query executed without capability validation.',
          'Allowed execution due to system configuration.'
        );
      }

      // Execute query directly without parameterization (concatenated SQL string)
      // This is vulnerable to SQL injection
      executionResult = await queryUnsafe(query);
    }

    // ==========================================
    // LAYER 2: DECRYPTION OF SENSITIVE FIELDS
    // ==========================================
    const processedRows = executionResult.map(row => {
      const newRow = { ...row };
      // Fields to decrypt if present
      const sensitiveFields = ['email', 'credit_card', 'phone'];
      
      sensitiveFields.forEach(field => {
        if (newRow[field] !== undefined) {
          if (enableLayer2) {
            newRow[field] = decrypt(newRow[field]);
          } else {
            // Keep the raw iv:ciphertext format
            l2Status = 'BYPASSED (Exposing Ciphertext)';
          }
        }
      });
      return newRow;
    });

    res.json({
      success: true,
      layer1: { status: l1Status, active: enableLayer1 },
      layer2: { status: l2Status, active: enableLayer2 },
      data: processedRows
    });

  } catch (error) {
    // Database or syntax execution error (typical in failed SQLi payloads)
    await logSecurityEvent(
      query,
      'DATABASE ERROR',
      `SQL syntax or execution failed: ${error.message}`,
      'Captured execution crash.'
    );
    
    res.status(500).json({
      success: false,
      layer1: { status: l1Status, active: enableLayer1 },
      layer2: { status: l2Status, active: enableLayer2 },
      error: `Database execution error: ${error.message}`
    });
  }
});

// ============================================================================
// DATA DEDUPLICATION SYSTEM ENDPOINTS
// ============================================================================

// Endpoint: Fetch all verified unique contacts
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await getContacts();
    res.json({ success: true, contacts });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Endpoint: Validate and ingest new data entry
app.post('/api/contacts', async (req, res) => {
  const { first_name, last_name, email, phone, company } = req.body;
  
  if (!first_name || !last_name) {
    return res.status(400).json({ success: false, error: 'First name and Last name are required.' });
  }

  try {
    const existing = await getContacts();
    const evaluation = evaluateContact({ first_name, last_name, email, phone, company }, existing);
    
    // Log evaluation
    await logRedundancy(
      JSON.stringify({ first_name, last_name, email, phone, company }),
      evaluation.classification,
      evaluation.similarityScore,
      evaluation.reason
    );

    if (evaluation.classification === 'UNIQUE') {
      const result = await insertContact(first_name, last_name, email, phone, company);
      return res.json({
        success: true,
        classification: 'UNIQUE',
        contactId: result.id,
        message: 'Unique record verified and appended to the cloud database.'
      });
    } else if (evaluation.classification === 'DUPLICATE') {
      return res.status(409).json({
        success: false,
        classification: 'DUPLICATE',
        error: evaluation.reason,
        matchedRecord: evaluation.matchedRecord
      });
    } else { // POTENTIAL_DUPLICATE
      const result = await insertPendingReview(
        first_name,
        last_name,
        email,
        phone,
        company,
        evaluation.matchedRecord.id,
        evaluation.similarityScore,
        evaluation.reason
      );
      return res.json({
        success: true,
        classification: 'POTENTIAL_DUPLICATE',
        pendingId: result.id,
        message: 'Potential duplicate identified. Held in review quarantine.',
        matchedRecord: evaluation.matchedRecord,
        similarityScore: evaluation.similarityScore,
        reason: evaluation.reason
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Endpoint: Get pending reviews
app.get('/api/dedup/pending', async (req, res) => {
  try {
    const pending = await getPendingReviews();
    res.json({ success: true, pending });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Endpoint: Get deduplication logs
app.get('/api/dedup/logs', async (req, res) => {
  try {
    const logs = await getRedundancyLogs();
    res.json({ success: true, logs });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Endpoint: Resolve a quarantined potential duplicate
app.post('/api/dedup/resolve', async (req, res) => {
  const { pendingId, action } = req.body;
  if (!pendingId || !action) {
    return res.status(400).json({ success: false, error: 'pendingId and action are required.' });
  }

  try {
    const pending = await getPendingReviewById(pendingId);
    if (!pending) {
      return res.status(404).json({ success: false, error: 'Quarantined record not found.' });
    }

    if (action === 'APPROVE') {
      const result = await insertContact(
        pending.first_name,
        pending.last_name,
        pending.email,
        pending.phone,
        pending.company,
        'VERIFIED'
      );
      await deletePendingReview(pendingId);
      
      await logRedundancy(
        JSON.stringify(pending),
        'UNIQUE',
        pending.similarity_score,
        `Manually Approved: Quarantined record #${pendingId} forced as unique (Contact Record #${result.id}).`
      );

      return res.json({ success: true, message: 'Record approved and appended to database.' });

    } else if (action === 'REJECT') {
      await deletePendingReview(pendingId);

      await logRedundancy(
        JSON.stringify(pending),
        'DUPLICATE',
        pending.similarity_score,
        `Manually Rejected: Quarantined record #${pendingId} discarded as duplicate/false-positive.`
      );

      return res.json({ success: true, message: 'Record rejected and deleted from quarantine.' });

    } else if (action === 'MERGE') {
      const existing = await getContactById(pending.matched_contact_id);
      if (!existing) {
        // Fallback: If original was deleted, insert as new verified contact
        const result = await insertContact(
          pending.first_name,
          pending.last_name,
          pending.email,
          pending.phone,
          pending.company,
          'VERIFIED'
        );
        await deletePendingReview(pendingId);
        return res.json({ success: true, message: 'Matching base record not found. Inserted pending record as new.' });
      }

      // Merge logic: fill in empty existing values with pending values
      const mergedPhone = existing.phone || pending.phone;
      const mergedEmail = existing.email || pending.email;
      const mergedCompany = existing.company || pending.company;

      await updateContact(
        existing.id,
        existing.first_name,
        existing.last_name,
        mergedEmail,
        mergedPhone,
        mergedCompany
      );
      await deletePendingReview(pendingId);

      await logRedundancy(
        JSON.stringify(pending),
        'MERGED',
        pending.similarity_score,
        `Manually Merged: Quarantined record #${pendingId} merged into existing Contact Record #${existing.id}.`
      );

      return res.json({ success: true, message: `Merged successfully into Contact Record #${existing.id}.` });
    }

    return res.status(400).json({ success: false, error: 'Invalid action. Must be APPROVE, REJECT, or MERGE.' });

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Endpoint: Reset/Reseed Deduplication DB
app.post('/api/dedup/reset', async (req, res) => {
  try {
    await initDatabase();
    res.json({ success: true, message: 'Database reset and deduplication data reseeded.' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Cloud SQL Security System listening on port ${PORT}`);
});
