# Database Guard Dog & Double-Finder Scanner

> **An interactive dual-purpose security sandbox** that brings two powerful concepts to life: **defense-in-depth SQL injection protection** and **intelligent fuzzy-matching data deduplication**. Built with React + Node.js, this is an educational showcase of enterprise-grade security patterns and algorithmic data cleaning.

---

## What This Does

This application is split into two primary interactive modules:

### 1.**Database Guard Dog** (SQL Injection Shield)
Protects a SQLite database containing sensitive customer information using two toggleable security layers:

- **Level 1: Good Command Inspector (HMAC-SHA256 Capability Tokens)**  
  Generates cryptographically signed tokens for approved database commands. Any query that is tampered with or doesn't match the authorized template is instantly blocked. Uses `HMAC-SHA256(Action + SQL_Template, SecretKey)` to ensure integrity.

- **Level 2: Secret Safe Lock (AES-256 Column Encryption)**  
  Scrambles sensitive information (emails, credit cards, phone numbers) before writing to disk using `AES-256-CBC` with `scrypt`-derived keys. Even if Layer 1 is bypassed, attackers only see encrypted ciphertext.

- **Programmer Mode**  
  Toggle a checkbox to inspect the underlying SQL, parameters, digital tokens, and security layer status in real-time.

### 2.**Double-Finder Scanner** (Data Deduplication)
An ingestion pipeline that screens new contact entries against existing database records to prevent duplicate clutter:

- **Normalizer**  
  Cleans email headers, removes symbols from phone numbers, and standardizes names for consistent comparison.

- **Deduplication Engine**
  - *Exact Matches*: Instantly blocks duplicate emails or phone numbers.
  - *Fuzzy Matches*: Uses **Levenshtein Distance** to flag typos (e.g., "Alise Johnson" vs. "Alice Johnson").
  - *Composite Score*: Weighted criteria (60% Name, 20% Company, 20% Email) decides whether to quarantine or save.

- **Double-Check Box**  
  Review quarantine records side-by-side with character-level differences highlighted. **Save Anyway**, **Combine Details**, or **Throw Away**.

---

## Technology Stack

| Component | Tech |
|-----------|------|
| **Frontend** | React 19 + Vite, HSL CSS variables, custom SVG radial analytics |
| **Backend** | Node.js + Express, SQLite3 (in-memory database) |
| **Security** | Node crypto (scrypt, AES-256-CBC, HMAC-SHA256) |
| **Algorithms** | Levenshtein Distance, fuzzy string matching |

**Language Composition:**
- JavaScript: 90.1% 
- CSS: 9.6% 
- HTML: 0.3% 

---

## Repository Structure

```
backend/
  ├── server.js              Express API routes, dual-layer security gates, dedup endpoints
  ├── db.js                  SQLite3 schema, parameterized queries, encryption/decryption
  ├── security.js            Capability tokens, signature verification, IDS heuristics
  ├── dedup.js               Levenshtein distance, normalization, scoring engine
  ├── package.json           Dependencies: express, cors, sqlite3
  └── scratch/               Scratch work / experiments

frontend/
  ├── src/
  │   ├── App.jsx            Monolithic React UI (~1,800 lines): security + dedup modules
  │   ├── index.css          HSL design variables, dark cozy theme, SVG analytics
  │   ├── main.jsx           React entry point
  │   └── assets/            Static resources
  ├── vite.config.js         Vite + React plugin configuration
  ├── .oxlintrc.json         Linting rules
  └── package.json           Dependencies: react, react-dom, vite

README.md (this file)
.gitignore
```

### How It Fits Together

**Request Flow (SQL Execution):**
1. Frontend sends query + capability code to `/api/execute`
2. Backend **Layer 1** validates HMAC signature and checks template match
3. If valid, query runs as **parameterized SQL** (immune to injection)
4. Result rows have sensitive fields **decrypted** (Layer 2) before returning
5. Both layers' status logged to security audit trail

**Data Ingestion Flow (Deduplication):**
1. New contact submitted via `/api/contacts`
2. Backend normalizes all fields (email, phone, name, company)
3. **Exact match check**: Email or phone already in DB? → `DUPLICATE`
4. **Fuzzy match check**: Levenshtein similarity scoring against all contacts
5. Composite score determines: `UNIQUE` → insert, `POTENTIAL_DUPLICATE` → quarantine, or `DUPLICATE` → reject
6. User can manually review and resolve (`APPROVE`, `REJECT`, `MERGE`) via `/api/dedup/resolve`

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v16.0.0 or higher
- npm (comes with Node.js)

### Installation & Setup

**1. Clone the repository**
```bash
git clone https://github.com/Sweta113Sharma/data-redundancy-removal-system.git
cd data-redundancy-removal-system
```

**2. Install Backend dependencies**
```bash
cd backend
npm install
```

**3. Install Frontend dependencies**
```bash
cd ../frontend
npm install
```

### Running the Application

**Start the Backend API** (from `backend/` directory):
```bash
npm run dev
```
Server runs on **http://localhost:5000**

**Start the Frontend Dev Server** (from `frontend/` directory, in a new terminal):
```bash
npm run dev
```
App runs on **http://localhost:5173** (or `:5174` if port is busy)

**Open your browser** and navigate to the provided local URL. You'll see both modules ready to explore!

---

## 🔬 Security Logic Deep Dive

### Layer 1: Signature Validation

All database queries must be pre-authorized via capability codes. The signature is computed as:

$$\text{Signature} = \text{HMAC-SHA256}(\text{Action} + \text{SQL\_Template}, \text{SecretKey})$$

When a query is executed:
1. The capability code is **verified** using the server secret
2. Incoming SQL is normalized (whitespace, casing) and compared **character-by-character** to the approved template
3. If they match, the query runs as a **parameterized statement** (parameters passed separately, not concatenated)
4. Tampering is detected instantly; any mismatch → `BLOCKED`

### Layer 2: AES-256-CBC Encryption

Sensitive columns (`email`, `credit_card`, `phone`) are encrypted before storage:
- **Key derivation**: `scrypt` with server secret + 64-byte salt → 32-byte key
- **Cipher**: AES-256-CBC with random IV per row
- **Format on disk**: `iv:encrypted_hex_string`

If an attacker executes a rogue query when Layer 1 is disabled, they retrieve only encrypted ciphertext. Without the server secret, the data remains unreadable—adding a second line of defense.

---

## Deduplication Algorithm

### Normalization
- **Email**: lowercase, trim whitespace
- **Phone**: remove non-digits; US numbers starting with `1` normalized to 10 digits
- **Name**: lowercase, collapse extra spaces, trim

### Exact Match Detection
Loops through all existing contacts:
- Exact email match? → `DUPLICATE` (100% certainty)
- Exact phone match? → `DUPLICATE` (100% certainty)

### Fuzzy Match Scoring
For remaining records, compute Levenshtein distance between normalized strings:
- **Name similarity**: `1.0 - (distance / max_length)`
- **Company similarity**: same formula
- **Email similarity**: same formula (if both present)

### Composite Score
Weighted average:
- If both email and name present: `0.6 × nameScore + 0.2 × companyScore + 0.2 × emailScore`
- If email missing: `0.8 × nameScore + 0.2 × companyScore`

### Classification Thresholds
- Score ≥ 0.82 → `POTENTIAL_DUPLICATE` (high risk of redundancy)
- 0.60 ≤ Score < 0.82 → `POTENTIAL_DUPLICATE` (moderate match, review recommended)
- Score < 0.60 → `UNIQUE` (verified as unique)

Quarantined records are stored in a separate table and can be manually reviewed side-by-side with the matched original.

---

## API Endpoints

### Security & Execution

| Method | Endpoint | Purpose |
|--------|----------|---------|
| `GET` | `/api/capabilities` | List available authorized actions |
| `POST` | `/api/capabilities/generate` | Generate a signed capability token for an action |
| `POST` | `/api/execute` | Execute a database query with dual-layer security |
| `GET` | `/api/logs` | Fetch security event audit trail |
| `GET` | `/api/database/raw` | View raw encrypted rows on disk |
| `POST` | `/api/database/reset` | Reset and reseed the database |

### Deduplication

| Method | Endpoint | Purpose |
|--------|----------|---------|
| `GET` | `/api/contacts` | Fetch all verified unique contacts |
| `POST` | `/api/contacts` | Ingest and validate a new contact |
| `GET` | `/api/dedup/pending` | Fetch all quarantined potential duplicates |
| `GET` | `/api/dedup/logs` | Fetch deduplication decision logs |
| `POST` | `/api/dedup/resolve` | Resolve a quarantine record (`APPROVE`, `REJECT`, or `MERGE`) |
| `POST` | `/api/dedup/reset` | Reset deduplication data |

---

## Interactive Features

### Security Module
- **Toggle Layer 1**: Watch queries get blocked or unprotected as you disable signature validation
- **Toggle Layer 2**: See encrypted ciphertext vs. decrypted plaintext
- **Programmer Mode**: Inspect tokens, query templates, and digital signatures in real-time
- **Live Threat Logs**: See SQL injection attempts and security events as they happen
- **Try Injections**: Safely test SQL injection payloads when Layer 1 is off—watch the IDS detect them

### Deduplication Module
- **Add Contacts**: Ingest new records and watch the engine classify them
- **Quarantine Review**: View side-by-side comparisons with character-level diff highlighting
- **Manual Merge**: Combine quarantined records with existing contacts
- **Similarity Scoring**: See the numeric breakdown of why records matched

---

## Learning Outcomes

This project demonstrates:

1. **Cryptographic Security**  
   - HMAC for message authentication  
   - AES-256-CBC for encryption  
   - Key derivation via scrypt  

2. **SQL Injection Defense**  
   - Parameterized queries  
   - Capability token authorization  
   - Intrusion detection heuristics  

3. **String Algorithms**  
   - Levenshtein distance (edit distance)  
   - Fuzzy matching and similarity scoring  
   - Practical applications in deduplication  

4. **Full-Stack Web Development**  
   - React for interactive UIs  
   - Express for REST API design  
   - SQLite for in-memory databases  
   - Vite for fast development  

---

## Experiment Ideas

- **Stress Test Dedup**: Add 1,000+ similar names (e.g., variations of "John Smith"). How does the algorithm scale?
- **Encryption Edge Cases**: Try special characters, emoji, or NULL values in encrypted fields. Does decryption handle them?
- **Token Tampering**: Generate a capability token, then manually modify it. Watch Layer 1 reject it.
- **False Positives**: Tweak similarity thresholds in `dedup.js` and observe the trade-off between catching duplicates and false alarms.
- **Injection Payloads**: Test classic SQLi payloads (`' OR '1'='1`, `UNION SELECT`, etc.) when Layer 1 is disabled. The IDS will flag them.

---

## Project Context

This is an **educational sandbox** designed to clearly illustrate:
- How enterprise security layers work in practice
- The strengths (and limitations) of defense-in-depth
- Practical algorithms for data quality and deduplication

It is **not** intended for production use without significant hardening (rate limiting, audit logging, key rotation, etc.).

---

## Questions?

- **How does the similarity scoring prevent false positives?**  
  See the threshold logic in `dedup.js` lines 186–204. Scores 0.60–0.82 trigger a *manual review* step, not auto-deletion.

- **Why parameterized queries with HMAC and not just HMAC?**  
  Double defense: HMAC ensures authorization; parameterized queries prevent syntax attacks even if Layer 1 is disabled.

- **Can I export the audit logs?**  
  Yes! The `/api/logs` endpoint returns the full security event trail. Use it to feed a SIEM or compliance system.

- **How do I customize encryption keys?**  
  Edit `backend/security.js` to load keys from environment variables or a KMS instead of hardcoding them.

---

## License

This project is open source and available under the MIT License.

---

**Built with ❤️ to teach security concepts and data algorithms interactively.**
