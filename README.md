# 🛡️ Database Guard Dog & 🔎 Double-Finder Scanner

A comprehensive sandbox application designed to demonstrate and simulate **double-layer SQL Injection protection** and a **fuzzy-matching data deduplication engine**. Built with a modern, cozy dark chocolate and mint green dashboard that is simple enough for a 10-year-old to play with, yet features advanced programmer settings underneath.

---

## 🎮 Live Interface Preview

The application is split into two primary interactive modules:

### 1. 🐶 Database Guard Dog (SQL Injection Shield)
Protects a SQLite database containing sensitive customer information using two toggleable layers:
*   **Level 1: Good Command Inspector (Capability Tokens)**: Generates signed HMAC-SHA256 tokens for approved database commands. Any query that is tampered with or does not match the authorized command template is immediately blocked.
*   **Level 2: Secret Safe Lock (AES-256 Column Encryption)**: Scrambles sensitive information (emails, credit cards, phone numbers) before writing them to disk. Disabling this layer simulates a data leak showing raw scrambled ciphertext.
*   **Programmer Mode**: Toggle a checkbox to inspect the underlying SQL, parameters, and digital tokens.

### 2. 🔎 Double-Finder Scanner (Data Deduplication)
An ingestion pipeline that screens new contact entries against existing database records to prevent clutter and duplicate entries:
*   **Normalizer**: Cleans email headers, removes symbols from phone numbers, and standardizes names.
*   **Deduplication Engine**:
    *   *Exact Matches*: Instantly blocks duplicate emails or phone numbers.
    *   *Fuzzy Matches*: Uses **Levenshtein Distance** algorithms to flag typos (e.g., "Alise Johnson" vs. "Alice Johnson").
    *   *Composite Score*: Weighting criteria (60% Name, 20% Company, 20% Email) decides whether to quarantine or save.
*   **Double-Check Box**: Let's you inspect quarantine records side-by-side with character-level differences highlighted in red, allowing you to **Save Anyway**, **Combine Details**, or **Throw Away**.

---

## 🛠️ Technology Stack

*   **Frontend**: React (Vite), HSL CSS variables, custom SVG radial analytics.
*   **Backend**: Node.js, Express, SQLite3 (in-memory database).
*   **Security Tools**: Node crypto (scrypt key derivation, AES-256-CBC encryption, HMAC-SHA256 signatures).
*   **Deduplication Tools**: Custom Levenshtein Distance similarity string alignment.

---

## 🚀 Getting Started

### 📋 Prerequisites
*   [Node.js](https://nodejs.org/) (v16.0.0 or higher recommended)
*   npm (installed automatically with Node.js)

### 📥 Installation & Setup

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/Sweta113Sharma/data-redundancy-removal-system.git
    cd data-redundancy-removal-system
    ```

2.  **Install Backend dependencies**:
    ```bash
    cd backend
    npm install
    ```

3.  **Install Frontend dependencies**:
    ```bash
    cd ../frontend
    npm install
    ```

### ⚡ Running the Applications

#### 1. Start the Backend API
Run this inside the `backend` folder:
```bash
npm run dev
```
*The server starts on port `5000` (`http://localhost:5000`).*

#### 2. Start the Frontend Dev Server
Run this inside the `frontend` folder:
```bash
npm run dev
```
*The React app starts on `http://localhost:5173` (or `5174`). Open the link in your browser.*

---

## 🔬 How the Security Logic Works

### Level 1 Signature Validation
Approved capabilities (like `SEARCH_USER_PUBLIC` or `SEARCH_USER_SENSITIVE`) are signed using a server-side secret key:
$$\text{Signature} = \text{HMAC-SHA256}(\text{Action} + \text{SQL\_Template}, \text{SecretKey})$$
When a client requests database access:
1.  The signature is verified.
2.  The incoming query structure is standard-spaced and verified for strict character-by-character equality with the approved template.
3.  The request is run as a **parameterized query** to prevent SQL syntax manipulation.

### Level 2 AES-256-CBC Encryption
Sensitive columns on disk are encrypted using:
*   **Key**: derived via `scrypt` using a server secret.
*   **Format**: `iv:encrypted_hex_string`.
If an attacker executes a rogue query when Level 1 is bypassed, they only get the encrypted ciphertext, keeping user details safe!
