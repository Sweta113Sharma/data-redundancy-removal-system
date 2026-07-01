import crypto from 'crypto';

const CAPABILITY_SECRET = 'c0de-alpha-secure-cap-key-2026';

// Pre-defined authorized database capability templates
export const CAPABILITIES = {
  SEARCH_USER_PUBLIC: {
    action: 'SEARCH_USER_PUBLIC',
    template: 'SELECT id, username, role FROM users WHERE username = ?',
    description: 'Allows searching for basic public profile info by username.'
  },
  SEARCH_USER_SENSITIVE: {
    action: 'SEARCH_USER_SENSITIVE',
    template: 'SELECT id, username, email, credit_card, phone, role, balance FROM users WHERE username = ?',
    description: 'Allows privileged lookup of full account details (requires AES decryption).'
  },
  LIST_USERS_BASIC: {
    action: 'LIST_USERS_BASIC',
    template: 'SELECT id, username, role FROM users',
    description: 'Allows list view of public users.'
  }
};

/**
 * Generates a cryptographically signed Capability Code (Token).
 * Format: base64(payload).signature
 */
export function generateCapabilityCode(action) {
  const cap = CAPABILITIES[action];
  if (!cap) {
    throw new Error(`Unknown capability action: ${action}`);
  }

  const payload = {
    action: cap.action,
    template: cap.template,
    issuedAt: Date.now(),
    expiresAt: Date.now() + 1000 * 60 * 60 // 1 hour validity
  };

  const payloadStr = JSON.stringify(payload);
  const payloadB64 = Buffer.from(payloadStr).toString('base64');
  
  const hmac = crypto.createHmac('sha256', CAPABILITY_SECRET);
  hmac.update(payloadB64);
  const signature = hmac.digest('hex');

  return `${payloadB64}.${signature}`;
}

/**
 * Verifies a Capability Code and returns the decoded payload.
 * Throws error if signature is invalid or token is expired.
 */
export function verifyCapabilityCode(token) {
  if (!token || typeof token !== 'string') {
    throw new Error('Missing or invalid capability code format.');
  }

  const parts = token.split('.');
  if (parts.length !== 2) {
    throw new Error('Invalid capability code structure.');
  }

  const [payloadB64, signature] = parts;
  
  // Re-verify HMAC signature
  const hmac = crypto.createHmac('sha256', CAPABILITY_SECRET);
  hmac.update(payloadB64);
  const expectedSignature = hmac.digest('hex');

  if (signature !== expectedSignature) {
    throw new Error('Capability Code signature validation failed (untrusted token).');
  }

  const payloadStr = Buffer.from(payloadB64, 'base64').toString('utf8');
  const payload = JSON.parse(payloadStr);

  if (Date.now() > payload.expiresAt) {
    throw new Error('Capability Code has expired.');
  }

  return payload;
}

/**
 * Heuristic Intrusion Detection Engine.
 * Scans raw SQL query strings for common SQL injection signatures (Tautologies, Comments, Union queries, Piggybacked SQL).
 * Used for detecting and logging attacks when Layer 1 is disabled/bypassed.
 */
export function detectSQLInjection(sql) {
  if (!sql || typeof sql !== 'string') {
    return { detected: false, reasons: [] };
  }

  const reasons = [];
  const lowerSql = sql.toLowerCase().trim();

  // 1. Check for SQL comments (disables the rest of the original query structure)
  if (sql.includes('--') || sql.includes('/*') || sql.includes('#')) {
    reasons.push('SQL comment indicators detected (-- or /* or #)');
  }

  // 2. Check for Boolean Tautologies (e.g. OR 1=1, OR 'a'='a', OR true)
  const tautologyPatterns = [
    /\b(or|and)\b\s*['"]?\w+['"]?\s*=\s*['"]?\w+['"]?/i, // matches "or 1=1", "or 'a'='a'"
    /\b(or|and)\b\s*true\b/i,
    /\b(or|and)\b\s*like\b/i,
  ];
  for (const pattern of tautologyPatterns) {
    if (pattern.test(lowerSql)) {
      reasons.push('Tautology pattern detected (e.g. OR/AND statement that evaluates to true)');
      break;
    }
  }

  // 3. Check for piggybacked queries (semicolon query splitting)
  if (sql.includes(';')) {
    // Make sure it's not a trailing semicolon only
    const splitCount = sql.split(';').filter(part => part.trim().length > 0).length;
    if (splitCount > 1) {
      reasons.push('Stacked query delimiter detected (semicolon used to run multiple commands)');
    }
  }

  // 4. Check for UNION SELECT injections
  if (/\bunion\b\s+(all\s+)?\bselect\b/i.test(lowerSql)) {
    reasons.push('UNION SELECT attempt detected (used to extract arbitrary tables)');
  }

  // 5. Check for metadata schema lookups
  if (lowerSql.includes('sqlite_master') || lowerSql.includes('sqlite_schema') || lowerSql.includes('information_schema')) {
    reasons.push('Metadata catalog table reference detected (trying to list database schema)');
  }

  return {
    detected: reasons.length > 0,
    reasons
  };
}
