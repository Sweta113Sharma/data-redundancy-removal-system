import sqlite3 from 'sqlite3';
import crypto from 'crypto';

// Encryption configuration
const ENCRYPTION_KEY = crypto.scryptSync('my-super-secret-key-123456', 'salt', 32); // 32 bytes key for AES-256
const ALGORITHM = 'aes-256-cbc';
const IV_LENGTH = 16;

/**
 * Encrypts plaintext using AES-256-CBC.
 * Returns IV and Ciphertext joined by a colon.
 */
export function encrypt(text) {
  if (!text) return '';
  try {
    const iv = crypto.randomBytes(IV_LENGTH);
    const cipher = crypto.createCipheriv(ALGORITHM, ENCRYPTION_KEY, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return `${iv.toString('hex')}:${encrypted}`;
  } catch (error) {
    console.error('Encryption failed:', error);
    return text;
  }
}

/**
 * Decrypts ciphertext (format 'iv:encrypted_text') using AES-256-CBC.
 * If decryption fails, returns the ciphertext itself (useful for simulating database leaks of raw data).
 */
export function decrypt(ciphertext) {
  if (!ciphertext) return '';
  try {
    const parts = ciphertext.split(':');
    if (parts.length !== 2) {
      return ciphertext; // Not encrypted or incorrect format
    }
    const iv = Buffer.from(parts[0], 'hex');
    const encryptedText = Buffer.from(parts[1], 'hex');
    const decipher = crypto.createDecipheriv(ALGORITHM, ENCRYPTION_KEY, iv);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  } catch (error) {
    // Return raw ciphertext to simulate what an attacker sees when they don't have the key
    return ciphertext;
  }
}

// Initialize SQLite database (in-memory so it resets clean and requires no file permissions)
const db = new sqlite3.Database(':memory:');

export function initDatabase() {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      // 1. Create Users table
      db.run(`
        CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          username TEXT UNIQUE,
          password_hash TEXT,
          email TEXT,
          credit_card TEXT,
          phone TEXT,
          role TEXT,
          balance REAL
        )
      `, (err) => {
        if (err) return reject(err);
      });

      // 2. Create Security Logs table
      db.run(`
        CREATE TABLE IF NOT EXISTS security_logs (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          timestamp TEXT,
          query_text TEXT,
          status TEXT,
          details TEXT,
          mitigation TEXT
        )
      `, (err) => {
        if (err) return reject(err);
      });

      // 3. Create contacts table for Deduplication system
      db.run(`
        CREATE TABLE IF NOT EXISTS contacts (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          first_name TEXT,
          last_name TEXT,
          email TEXT,
          phone TEXT,
          company TEXT,
          status TEXT
        )
      `, (err) => {
        if (err) return reject(err);
      });

      // 4. Create pending reviews queue
      db.run(`
        CREATE TABLE IF NOT EXISTS pending_reviews (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          first_name TEXT,
          last_name TEXT,
          email TEXT,
          phone TEXT,
          company TEXT,
          matched_contact_id INTEGER,
          similarity_score REAL,
          reason TEXT
        )
      `, (err) => {
        if (err) return reject(err);
      });

      // 5. Create redundancy evaluation audit logs
      db.run(`
        CREATE TABLE IF NOT EXISTS redundancy_logs (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          timestamp TEXT,
          input_data TEXT,
          classification TEXT,
          similarity_score REAL,
          details TEXT
        )
      `, (err) => {
        if (err) return reject(err);
      });

      // Clear existing records in users/security_logs/contacts/pending/logs on reset
      db.run(`DELETE FROM users`);
      db.run(`DELETE FROM security_logs`);
      db.run(`DELETE FROM contacts`);
      db.run(`DELETE FROM pending_reviews`);
      db.run(`DELETE FROM redundancy_logs`);

      // Seed initial users with AES-256 encrypted fields
      const seedUsers = [
        {
          username: 'admin',
          password_hash: crypto.createHash('sha256').update('AdminPassword2026!').digest('hex'),
          email: 'admin@cloudsecure.io',
          credit_card: '4111-2222-3333-4444',
          phone: '+1-555-0199',
          role: 'administrator',
          balance: 12500.50
        },
        {
          username: 'alice',
          password_hash: crypto.createHash('sha256').update('aliceSecure123').digest('hex'),
          email: 'alice.johnson@gmail.com',
          credit_card: '5500-1234-5678-9012',
          phone: '+1-555-0142',
          role: 'user',
          balance: 1420.75
        },
        {
          username: 'bob',
          password_hash: crypto.createHash('sha256').update('bobPassWord!').digest('hex'),
          email: 'bob.smith@yahoo.com',
          credit_card: '3782-822463-10005',
          phone: '+1-555-0175',
          role: 'user',
          balance: 310.00
        }
      ];

      const stmt = db.prepare(`
        INSERT INTO users (username, password_hash, email, credit_card, phone, role, balance)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `);

      for (const u of seedUsers) {
        stmt.run(
          u.username,
          u.password_hash,
          encrypt(u.email),
          encrypt(u.credit_card),
          encrypt(u.phone),
          u.role,
          u.balance
        );
      }
      stmt.finalize();

      // Seed contacts
      const seedContacts = [
        { first_name: 'Alice', last_name: 'Johnson', email: 'alice.johnson@gmail.com', phone: '+1-555-555-0142', company: 'Google Inc.', status: 'VERIFIED' },
        { first_name: 'Bob', last_name: 'Smith', email: 'bob.smith@yahoo.com', phone: '+1-555-555-0175', company: 'Yahoo Corp.', status: 'VERIFIED' },
        { first_name: 'Charlie', last_name: 'Brown', email: 'charlie.brown@peanuts.com', phone: '+1-555-555-0120', company: 'Peanuts Inc.', status: 'VERIFIED' },
        { first_name: 'David', last_name: 'Miller', email: 'david.miller@outlook.com', phone: '+1-555-555-0211', company: 'Microsoft', status: 'VERIFIED' },
        { first_name: 'Eva', last_name: 'Green', email: 'eva.green@cinema.com', phone: '+1-555-555-0192', company: 'Green Films', status: 'VERIFIED' }
      ];

      const contactStmt = db.prepare(`
        INSERT INTO contacts (first_name, last_name, email, phone, company, status)
        VALUES (?, ?, ?, ?, ?, ?)
      `);
      for (const c of seedContacts) {
        contactStmt.run(c.first_name, c.last_name, c.email, c.phone, c.company, c.status);
      }
      contactStmt.finalize();

      // Seed initial pending reviews (fuzzy matching test cases)
      const seedPending = [
        { first_name: 'Alise', last_name: 'Johnson', email: 'alice.johnson@gmail.com', phone: '+1-555-555-0142', company: 'Google', matched_contact_id: 1, similarity_score: 0.95, reason: 'Exact Phone Match: "+1-555-555-0142" already exists (Record #1).' },
        { first_name: 'Dave', last_name: 'Miller', email: 'dave.miller@outlook.com', phone: '', company: 'Microsoft Corp', matched_contact_id: 4, similarity_score: 0.81, reason: 'Name similarity is 80% ("Dave Miller" vs "David Miller").' }
      ];

      const pendingStmt = db.prepare(`
        INSERT INTO pending_reviews (first_name, last_name, email, phone, company, matched_contact_id, similarity_score, reason)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `);
      for (const p of seedPending) {
        pendingStmt.run(p.first_name, p.last_name, p.email, p.phone, p.company, p.matched_contact_id, p.similarity_score, p.reason);
      }
      pendingStmt.finalize();

      // Seed redundancy logs
      const redStmt = db.prepare(`
        INSERT INTO redundancy_logs (timestamp, input_data, classification, similarity_score, details)
        VALUES (?, ?, ?, ?, ?)
      `);
      const nowIso = new Date().toISOString();
      redStmt.run(nowIso, '{"first_name":"Alice","last_name":"Johnson","email":"alice.johnson@gmail.com"}', 'DUPLICATE', 1.0, 'Blocked: Exact Email Match: "alice.johnson@gmail.com" already exists (Record #1).');
      redStmt.run(nowIso, '{"first_name":"Dave","last_name":"Miller","email":"dave.miller@outlook.com"}', 'POTENTIAL_DUPLICATE', 0.81, 'Flagged: Name similarity is 80% ("Dave Miller" vs "David Miller"). Quarantined.');
      redStmt.run(nowIso, '{"first_name":"Charlie","last_name":"Brown","email":"charlie.brown@peanuts.com"}', 'UNIQUE', 0.0, 'Approved: Verified as unique. No matching record or similarity found.');
      redStmt.finalize();

      // Seed initial logs for security
      const logStmt = db.prepare(`
        INSERT INTO security_logs (timestamp, query_text, status, details, mitigation)
        VALUES (?, ?, ?, ?, ?)
      `);
      const now = new Date().toISOString();
      logStmt.run(now, 'SYSTEM INITIALIZATION', 'INFO', 'Database created and user table seeded with AES-256 encrypted entries.', 'None');
      logStmt.finalize();

      console.log('SQLite in-memory database initialized and seeded with encrypted data.');
      resolve(db);
    });
  });
}

// Helper to run query and return all rows
export function queryAll(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

// Helper to run query directly (unsafe, allowing string concatenation for SQLi simulation)
export function queryUnsafe(sql) {
  return new Promise((resolve, reject) => {
    db.all(sql, [], (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

// Helper to log a security event
export function logSecurityEvent(queryText, status, details, mitigation) {
  const timestamp = new Date().toISOString();
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO security_logs (timestamp, query_text, status, details, mitigation) VALUES (?, ?, ?, ?, ?)`,
      [timestamp, queryText, status, details, mitigation],
      function (err) {
        if (err) reject(err);
        else resolve({ id: this.lastID, timestamp });
      }
    );
  });
}

// Helper to retrieve logs
export function getLogs() {
  return queryAll('SELECT * FROM security_logs ORDER BY id DESC LIMIT 100');
}

// Helper to retrieve raw users table (to show the exact database storage representation)
export function getRawUsersTable() {
  return queryAll('SELECT id, username, password_hash, email, credit_card, phone, role, balance FROM users');
}

// ============================================================================
// DEDUPLICATION SYSTEM HELPER FUNCTIONS
// ============================================================================

export function getContacts() {
  return queryAll('SELECT * FROM contacts ORDER BY id DESC');
}

export function getContactById(id) {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM contacts WHERE id = ?', [id], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
}

export function insertContact(first_name, last_name, email, phone, company, status = 'VERIFIED') {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO contacts (first_name, last_name, email, phone, company, status) VALUES (?, ?, ?, ?, ?, ?)`,
      [first_name, last_name, email, phone, company, status],
      function (err) {
        if (err) reject(err);
        else resolve({ id: this.lastID });
      }
    );
  });
}

export function updateContact(id, first_name, last_name, email, phone, company) {
  return new Promise((resolve, reject) => {
    db.run(
      `UPDATE contacts SET first_name = ?, last_name = ?, email = ?, phone = ?, company = ? WHERE id = ?`,
      [first_name, last_name, email, phone, company, id],
      function (err) {
        if (err) reject(err);
        else resolve({ changes: this.changes });
      }
    );
  });
}

export function deleteContact(id) {
  return new Promise((resolve, reject) => {
    db.run('DELETE FROM contacts WHERE id = ?', [id], function (err) {
      if (err) reject(err);
      else resolve({ changes: this.changes });
    });
  });
}

export function getPendingReviews() {
  return queryAll('SELECT * FROM pending_reviews ORDER BY id DESC');
}

export function getPendingReviewById(id) {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM pending_reviews WHERE id = ?', [id], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
}

export function insertPendingReview(first_name, last_name, email, phone, company, matched_contact_id, similarity_score, reason) {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO pending_reviews (first_name, last_name, email, phone, company, matched_contact_id, similarity_score, reason) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [first_name, last_name, email, phone, company, matched_contact_id, similarity_score, reason],
      function (err) {
        if (err) reject(err);
        else resolve({ id: this.lastID });
      }
    );
  });
}

export function deletePendingReview(id) {
  return new Promise((resolve, reject) => {
    db.run('DELETE FROM pending_reviews WHERE id = ?', [id], function (err) {
      if (err) reject(err);
      else resolve({ changes: this.changes });
    });
  });
}

export function getRedundancyLogs() {
  return queryAll('SELECT * FROM redundancy_logs ORDER BY id DESC LIMIT 100');
}

export function logRedundancy(input_data, classification, similarity_score, details) {
  const timestamp = new Date().toISOString();
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO redundancy_logs (timestamp, input_data, classification, similarity_score, details) VALUES (?, ?, ?, ?, ?)`,
      [timestamp, input_data, classification, similarity_score, details],
      function (err) {
        if (err) reject(err);
        else resolve({ id: this.lastID, timestamp });
      }
    );
  });
}

export default db;
