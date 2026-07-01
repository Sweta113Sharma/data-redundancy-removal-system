import React, { useState, useEffect, useRef } from 'react';

const API_BASE = 'http://localhost:5000';

const ATTACK_PAYLOADS = [
  {
    name: '😇 Look up Alice (Safe)',
    query: "SELECT id, username, role FROM users WHERE username = 'alice'",
    params: ['alice'],
    capability: 'SEARCH_USER_PUBLIC',
    description: 'A standard safe database lookup.'
  },
  {
    name: '😇 View Secret Email & Phone (Safe)',
    query: "SELECT id, username, email, credit_card, phone, role, balance FROM users WHERE username = 'alice'",
    params: ['alice'],
    capability: 'SEARCH_USER_SENSITIVE',
    description: 'Accesses encrypted fields. Demands Level 2 Decryption.'
  },
  {
    name: "😈 Trick: Force login (' OR '1'='1)",
    query: "SELECT id, username, role FROM users WHERE username = '' OR '1'='1'",
    params: [],
    capability: 'SEARCH_USER_PUBLIC',
    description: 'Attempts to bypass filters and leak all database entries.'
  },
  {
    name: '😈 Trick: Steal credit cards (Union SQLi)',
    query: "SELECT id, username, role FROM users WHERE username = '' UNION SELECT id, username, credit_card FROM users --'",
    params: [],
    capability: 'SEARCH_USER_PUBLIC',
    description: 'Union query trying to fetch credit cards from another table.'
  },
  {
    name: '😈 Trick: Show Database Tables (Metadata Leak)',
    query: "SELECT id, username, role FROM users WHERE username = '' UNION SELECT id, name, sql FROM sqlite_master --'",
    params: [],
    capability: 'SEARCH_USER_PUBLIC',
    description: 'Attempts to inspect internal system tables.'
  }
];

function App() {
  // Tab Configuration
  const [currentTab, setCurrentTab] = useState('sqli'); // 'sqli' | 'dedup'
  const [showAdvanced, setShowAdvanced] = useState(false); // Simpler layout toggle

  // Security Toggles
  const [enableLayer1, setEnableLayer1] = useState(true);
  const [enableLayer2, setEnableLayer2] = useState(true);

  // SQL Injection Playground States
  const [queryInput, setQueryInput] = useState(ATTACK_PAYLOADS[0].query);
  const [paramInput, setParamInput] = useState(JSON.stringify(ATTACK_PAYLOADS[0].params));
  const [capabilityCode, setCapabilityCode] = useState('');
  const [capabilities, setCapabilities] = useState([]);
  const [selectedCapability, setSelectedCapability] = useState('SEARCH_USER_PUBLIC');
  const [isTampering, setIsTampering] = useState(false);

  // SQL Result States
  const [queryResult, setQueryResult] = useState(null);
  const [queryError, setQueryError] = useState(null);
  const [flowState, setFlowState] = useState('IDLE'); // 'IDLE' | 'PROCESSING' | 'L1_BLOCKED' | 'L2_BYPASSED' | 'L2_DECRYPTED' | 'DB_EXEC_CRASH'
  const [threatLogs, setThreatLogs] = useState([]);
  const [rawDbRows, setRawDbRows] = useState([]);

  // Data Deduplication Playground States
  const [contacts, setContacts] = useState([]);
  const [pendingReviews, setPendingReviews] = useState([]);
  const [dedupLogs, setDedupLogs] = useState([]);

  // Ingestion Form inputs
  const [firstNameInput, setFirstNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [companyInput, setCompanyInput] = useState('');

  // Pipeline execution tracking
  const [evalPipeline, setEvalPipeline] = useState({
    stage: 'IDLE', // 'IDLE' | 'CHECKING' | 'UNIQUE' | 'DUPLICATE' | 'POTENTIAL_DUPLICATE'
    subStage: 0,
    message: '',
    input: null,
    score: 0,
    details: ''
  });

  // Terminal scroll targets
  const terminalEndRef = useRef(null);
  const dedupTerminalEndRef = useRef(null);

  // On Load: Seed data
  useEffect(() => {
    fetchCapabilities();
    fetchRawDatabase();
    fetchLogs();
    fetchContacts();
    fetchPendingReviews();
    fetchDedupLogs();
  }, []);

  // Scroll to bottom of terminals when logs update
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [threatLogs]);

  useEffect(() => {
    if (dedupTerminalEndRef.current) {
      dedupTerminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [dedupLogs]);

  // Fetch API helpers
  const fetchCapabilities = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/capabilities`);
      const data = await res.json();
      if (data.success) {
        setCapabilities(data.capabilities);
        if (data.capabilities.length > 0) {
          generateTokenForAction(data.capabilities[0].action);
        }
      }
    } catch (e) {
      console.error('Failed to load capabilities', e);
    }
  };

  const generateTokenForAction = async (action) => {
    try {
      const res = await fetch(`${API_BASE}/api/capabilities/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action })
      });
      const data = await res.json();
      if (data.success) {
        setCapabilityCode(data.token);
      }
    } catch (e) {
      console.error('Failed to generate token', e);
    }
  };

  const fetchRawDatabase = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/database/raw`);
      const data = await res.json();
      if (data.success) setRawDbRows(data.rows);
    } catch (e) {
      console.error(e);
    }
  };

  const fetchLogs = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/logs`);
      const data = await res.json();
      if (data.success) setThreatLogs(data.logs);
    } catch (e) {
      console.error(e);
    }
  };

  const fetchContacts = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/contacts`);
      const data = await res.json();
      if (data.success) setContacts(data.contacts);
    } catch (e) {
      console.error(e);
    }
  };

  const fetchPendingReviews = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/dedup/pending`);
      const data = await res.json();
      if (data.success) setPendingReviews(data.pending);
    } catch (e) {
      console.error(e);
    }
  };

  const fetchDedupLogs = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/dedup/logs`);
      const data = await res.json();
      if (data.success) setDedupLogs(data.logs);
    } catch (e) {
      console.error(e);
    }
  };

  // Trigger token refresh when user picks another role
  useEffect(() => {
    if (selectedCapability && !isTampering) {
      generateTokenForAction(selectedCapability);
    }
  }, [selectedCapability, isTampering]);

  // SQL Execution Engine
  const executeQueryWithValues = async (queryText, queryParams, capability) => {
    setQueryResult(null);
    setQueryError(null);
    setFlowState('PROCESSING');

    // Refetches capability token signature if in standard mode
    let token = capabilityCode;
    if (!isTampering) {
      try {
        const tokenRes = await fetch(`${API_BASE}/api/capabilities/generate`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: capability })
        });
        const tokenData = await tokenRes.json();
        if (tokenData.success) {
          token = tokenData.token;
          setCapabilityCode(token);
        }
      } catch (err) {
        console.error('Error generating token:', err);
      }
    }

    try {
      const res = await fetch(`${API_BASE}/api/execute`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: queryText,
          params: queryParams,
          capabilityCode: token,
          enableLayer1,
          enableLayer2
        })
      });

      const data = await res.json();

      if (data.success) {
        setQueryResult(data.data);
        const l1Passed = data.layer1.status.includes('VERIFIED') || data.layer1.status.includes('BYPASSED');
        if (enableLayer1 && l1Passed) {
          setFlowState(enableLayer2 ? 'L2_DECRYPTED' : 'L2_BYPASSED');
        } else if (!enableLayer1) {
          setFlowState(enableLayer2 ? 'L2_DECRYPTED' : 'L2_BYPASSED');
        }
      } else {
        setQueryError(data.error || 'Server error occurred.');
        if (data.layer1 && data.layer1.status.includes('FAILED')) {
          setFlowState('L1_BLOCKED');
        } else {
          setFlowState('DB_EXEC_CRASH');
        }
      }
      fetchRawDatabase();
      fetchLogs();
    } catch (err) {
      setQueryError('Failed to connect to backend server. Ensure backend is running.');
      setFlowState('DB_EXEC_CRASH');
    }
  };

  const applyPayload = async (payload) => {
    setQueryInput(payload.query);
    setParamInput(JSON.stringify(payload.params));
    setSelectedCapability(payload.capability);
    await executeQueryWithValues(payload.query, payload.params, payload.capability);
  };

  const executeQuery = async () => {
    let parsedParams = [];
    try {
      parsedParams = JSON.parse(paramInput);
      if (!Array.isArray(parsedParams)) {
        parsedParams = [parsedParams];
      }
    } catch (e) {
      parsedParams = paramInput ? paramInput.split(',').map(s => s.trim().replace(/^'|'$/g, '')) : [];
    }
    await executeQueryWithValues(queryInput, parsedParams, selectedCapability);
  };

  const resetDatabase = async () => {
    if (!window.confirm('Reset database to its seeded start state?')) return;
    try {
      const res = await fetch(`${API_BASE}/api/database/reset`, { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        setQueryResult(null);
        setQueryError(null);
        setFlowState('IDLE');
        fetchRawDatabase();
        fetchLogs();
        alert('Database reset complete!');
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Deduplication handlers
  const applyDedupPreset = (preset) => {
    setFirstNameInput(preset.first_name);
    setLastNameInput(preset.last_name);
    setEmailInput(preset.email);
    setPhoneInput(preset.phone);
    setCompanyInput(preset.company);
    setEvalPipeline({
      stage: 'IDLE',
      subStage: 0,
      message: 'Click Ingest to start scanning',
      input: null,
      score: 0,
      details: ''
    });
  };

  const handleIngestContact = async (e) => {
    e.preventDefault();
    const payload = {
      first_name: firstNameInput,
      last_name: lastNameInput,
      email: emailInput,
      phone: phoneInput,
      company: companyInput
    };

    // Step-by-step visual ingestion sequence
    setEvalPipeline({
      stage: 'CHECKING',
      subStage: 0,
      message: '📥 Ingesting record payload...',
      input: payload,
      score: 0,
      details: ''
    });

    setTimeout(() => {
      setEvalPipeline(prev => ({
        ...prev,
        subStage: 1,
        message: '🧹 Cleaning characters and formatting strings...'
      }));
    }, 450);

    setTimeout(async () => {
      setEvalPipeline(prev => ({
        ...prev,
        subStage: 2,
        message: '🔍 Checking exact indexes and calculating similarities...'
      }));

      try {
        const res = await fetch(`${API_BASE}/api/contacts`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        const data = await res.json();

        setTimeout(() => {
          if (res.ok && data.success) {
            setEvalPipeline({
              stage: data.classification,
              subStage: 3,
              message: data.classification === 'UNIQUE' ? '🟢 Checked Clean!' : '⚠️ Quarantined!',
              input: payload,
              score: data.similarityScore || 0,
              details: data.message
            });
            fetchContacts();
            fetchPendingReviews();
            fetchDedupLogs();
          } else {
            setEvalPipeline({
              stage: 'DUPLICATE',
              subStage: 3,
              message: '❌ Redundancy Match Blocked!',
              input: payload,
              score: 1.0,
              details: data.error || 'Duplicate record rejected.'
            });
            fetchContacts();
            fetchPendingReviews();
            fetchDedupLogs();
          }
        }, 500);

      } catch (err) {
        setEvalPipeline({
          stage: 'IDLE',
          subStage: 0,
          message: 'Error communicating with deduplication API.',
          input: null,
          score: 0,
          details: err.message
        });
      }
    }, 900);
  };

  const handleResolvePending = async (pendingId, action) => {
    try {
      const res = await fetch(`${API_BASE}/api/dedup/resolve`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pendingId, action })
      });
      const data = await res.json();
      if (data.success) {
        fetchContacts();
        fetchPendingReviews();
        fetchDedupLogs();
      } else {
        alert(data.error);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleResetDedupDb = async () => {
    if (!window.confirm('Reset contacts database? This resets all deduplication data.')) return;
    try {
      const res = await fetch(`${API_BASE}/api/dedup/reset`, { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        fetchContacts();
        fetchPendingReviews();
        fetchDedupLogs();
        setEvalPipeline({
          stage: 'IDLE',
          subStage: 0,
          message: '',
          input: null,
          score: 0,
          details: ''
        });
        alert('Database cleared & reset!');
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Helper: Visual Character Difference Highlighter
  const highlightDiff = (val, baseVal) => {
    if (!val) return <span style={{ color: 'var(--text-muted)' }}>--</span>;
    if (!baseVal) return <span>{val}</span>;
    if (val === baseVal) return <span>{val}</span>;
    
    const chars = [];
    for (let i = 0; i < val.length; i++) {
      if (i >= baseVal.length || val[i] !== baseVal[i]) {
        chars.push(
          <span 
            key={i} 
            style={{ 
              color: 'var(--color-danger)', 
              textDecoration: 'underline', 
              fontWeight: 'bold',
              background: 'rgba(239, 68, 68, 0.15)',
              padding: '0 1px',
              borderRadius: '2px'
            }}
          >
            {val[i]}
          </span>
        );
      } else {
        chars.push(<span key={i}>{val[i]}</span>);
      }
    }
    return <span>{chars}</span>;
  };

  const getSystemStatus = () => {
    if (enableLayer1 && enableLayer2) {
      return { text: 'Fully Secured Mode', class: 'badge-success', icon: '🛡️' };
    } else if (!enableLayer1 && enableLayer2) {
      return { text: 'Layer 1 Bypassed (AES Active)', class: 'badge-danger', icon: '⚠️' };
    } else if (enableLayer1 && !enableLayer2) {
      return { text: 'Layer 2 Bypassed (Filter Active)', class: 'badge-danger', icon: '⚠️' };
    } else {
      return { text: 'COMPROMISED (Vulnerable)', class: 'badge-danger', icon: '🚨' };
    }
  };

  const statusInfo = getSystemStatus();

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem 2rem 2rem' }}>
      
      {/* App Header */}
      <header className="app-header">
        <div>
          <h1 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '1.8rem' }}>{currentTab === 'sqli' ? '🐶' : '🔎'}</span>
            {currentTab === 'sqli' ? 'Database Guard Dog!' : 'Double-Finder Scanner!'}
          </h1>
          <p style={{ marginTop: '0.25rem' }}>
            {currentTab === 'sqli' 
              ? 'We block tricky hacker commands and keep secrets locked up safe!' 
              : 'We spot duplicate details and catch spelling typos automatically!'}
          </p>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {currentTab === 'sqli' ? (
            <>
              <span className={`badge ${statusInfo.class}`} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.85rem' }}>
                <span>{statusInfo.icon}</span> {statusInfo.text}
              </span>
              <button className="btn btn-secondary" onClick={resetDatabase} title="Reset database storage & logs">
                🔄 Start Game Over
              </button>
            </>
          ) : (
            <>
              <span className="badge badge-success" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.85rem' }}>
                <span>🔒</span> Scanning Robot Ready
              </span>
              <button className="btn btn-secondary" onClick={handleResetDedupDb} title="Reset contacts and deduplication state">
                🔄 Start Game Over
              </button>
            </>
          )}
        </div>
      </header>

      {/* Tabs Navigation */}
      <div className="tab-bar">
        <button 
          className={`tab-link ${currentTab === 'sqli' ? 'active' : ''}`}
          onClick={() => setCurrentTab('sqli')}
        >
          🐶 Guard Dog (Block Bad Code)
        </button>
        <button 
          className={`tab-link ${currentTab === 'dedup' ? 'active' : ''}`}
          onClick={() => setCurrentTab('dedup')}
        >
          🔎 Double-Finder (Clean Address Book)
        </button>
      </div>

      {/* Advanced Programmer Mode Toggle */}
      <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '2rem', padding: '0.75rem 1.25rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '12px', border: '1px solid var(--border-color)', width: 'fit-content' }}>
        <input 
          type="checkbox" 
          id="toggleAdvanced"
          checked={showAdvanced}
          onChange={(e) => setShowAdvanced(e.target.checked)}
          style={{ cursor: 'pointer', width: '18px', height: '18px', accentColor: 'var(--color-primary)' }}
        />
        <label htmlFor="toggleAdvanced" style={{ cursor: 'pointer', userSelect: 'none', fontSize: '0.9rem', fontWeight: '500', color: 'var(--text-primary)' }}>
          🛠️ Show Advanced Programmer Mode (Show code boxes, query scripts, and digital tokens)
        </label>
      </div>

      {/* TAB 1: SQL INJECTION SECURITY SHIELD */}
      {currentTab === 'sqli' && (
        <>
          <div className={showAdvanced ? "grid-3" : "grid-2"} style={{ marginBottom: '2rem' }}>
            
            {/* Column 1: Guard Dog Switches & Test Scenarios */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              {/* Panel 1.1: Guard Dog Options */}
              <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <h2>1. Safety Lock Switches</h2>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Turn these switches on or off to change the database guard dog's rules.
                </p>
                
                {/* Level 1 Switch */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', borderBottom: '1px solid rgba(253,251,247,0.05)', paddingBottom: '0.75rem' }}>
                  <div style={{ flex: 1 }}>
                    <strong style={{ display: 'block', fontSize: '0.92rem', color: 'var(--color-primary)' }}>Level 1: Good Command Inspector</strong>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      Checks if database commands match templates. Stops tricky queries!
                    </span>
                  </div>
                  <label className="switch" style={{ marginTop: '0.25rem' }}>
                    <input 
                      type="checkbox" 
                      checked={enableLayer1} 
                      onChange={(e) => {
                        setEnableLayer1(e.target.checked);
                        setFlowState('IDLE');
                      }} 
                    />
                    <span className="slider"></span>
                  </label>
                </div>

                {/* Level 2 Switch */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
                  <div style={{ flex: 1 }}>
                    <strong style={{ display: 'block', fontSize: '0.92rem', color: 'var(--color-secondary)' }}>Level 2: Secret Safe Lock</strong>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      Scrambles sensitive details. If turned off, secrets are printed in raw scrambled code!
                    </span>
                  </div>
                  <label className="switch" style={{ marginTop: '0.25rem' }}>
                    <input 
                      type="checkbox" 
                      checked={enableLayer2} 
                      onChange={(e) => {
                        setEnableLayer2(e.target.checked);
                        setFlowState('IDLE');
                      }} 
                    />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>

              {/* Panel 1.2: Scenario Picker */}
              <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h2>2. Run a Hacking Scenario</h2>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                  Click one of the buttons below. The query executes instantly!
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {ATTACK_PAYLOADS.map((payload, index) => (
                    <button 
                      key={index} 
                      className="btn btn-secondary" 
                      style={{ 
                        justifyContent: 'flex-start', 
                        padding: '0.75rem 1rem', 
                        fontSize: '0.85rem', 
                        textAlign: 'left', 
                        borderRadius: '12px',
                        border: '1.5px solid rgba(253,251,247,0.05)',
                        background: 'rgba(0,0,0,0.15)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '0.25rem',
                        width: '100%'
                      }}
                      onClick={() => applyPayload(payload)}
                    >
                      <div style={{ fontWeight: '700', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <span>{payload.name.includes('Trick') ? '😈' : '😇'}</span>
                        {payload.name}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                        {payload.description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Panel 1.3: Advanced Editor */}
              {showAdvanced && (
                <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <h2>🛠️ Programmer Code Console</h2>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>SQL Command Statement:</label>
                    <textarea 
                      className="form-input" 
                      style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', minHeight: '80px', background: 'rgba(0,0,0,0.4)', borderRadius: '8px' }}
                      value={queryInput}
                      onChange={(e) => setQueryInput(e.target.value)}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <div>
                      <label style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.25rem' }}>Query Parameters:</label>
                      <input 
                        type="text" 
                        className="form-input" 
                        style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}
                        value={paramInput}
                        onChange={(e) => setParamInput(e.target.value)}
                      />
                    </div>
                    <button 
                      className="btn btn-primary" 
                      style={{ alignSelf: 'flex-end', height: '38px', justifyContent: 'center' }}
                      onClick={executeQuery}
                    >
                      🚀 Send Code
                    </button>
                  </div>

                  <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(253,251,247,0.04)' }}>
                    <h3 style={{ fontSize: '0.85rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>🔑 Signed Key Code Card</h3>
                    
                    <div style={{ marginBottom: '0.75rem' }}>
                      <label style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.25rem' }}>Key Card Role:</label>
                      <select 
                        className="form-select" 
                        value={selectedCapability}
                        onChange={(e) => setSelectedCapability(e.target.value)}
                        style={{ borderRadius: '8px' }}
                      >
                        {capabilities.map(c => (
                          <option key={c.action} value={c.action}>{c.action}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                        <label style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>HMAC Signature Hash:</label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.7rem', color: 'var(--color-danger)', cursor: 'pointer' }}>
                          <input 
                            type="checkbox" 
                            checked={isTampering} 
                            onChange={(e) => {
                              setIsTampering(e.target.checked);
                              if (!e.target.checked) {
                                generateTokenForAction(selectedCapability);
                              } else {
                                setCapabilityCode(prev => prev.slice(0, -6) + 'TAMPER');
                              }
                            }} 
                          />
                          Break Key Signature
                        </label>
                      </div>
                      <textarea 
                        className="form-input" 
                        style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', height: '54px', resize: 'none', background: 'rgba(0,0,0,0.5)', wordBreak: 'break-all', borderColor: isTampering ? 'var(--color-danger)' : 'var(--border-color)', borderRadius: '8px' }}
                        value={capabilityCode}
                        onChange={e => setCapabilityCode(e.target.value)}
                        disabled={!isTampering}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Column 2: Guard Dog Steps & Live Output Console */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="glass-panel" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h2>🖥️ Live Result Screen</h2>
                <div style={{ 
                  flex: 1, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center',
                  background: 'rgba(0, 0, 0, 0.25)', 
                  borderRadius: '12px', 
                  border: '2px solid var(--border-color)', 
                  padding: '1.25rem',
                  minHeight: '220px'
                }}>
                  {flowState === 'PROCESSING' && (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', height: '100%' }}>
                      <span className="spinner-icon" style={{ fontSize: '2.5rem' }}>⏳</span>
                      <strong style={{ color: 'var(--color-primary)', fontSize: '1rem' }}>Checking access tokens and matching code templates...</strong>
                    </div>
                  )}

                  {flowState === 'IDLE' && (
                    <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '3rem' }}>🐕</span>
                      <strong style={{ fontSize: '1.1rem', color: '#fff' }}>Awaiting Action</strong>
                      <span>Click a Hacking Scenario on the left to watch the Guard Dog protect the database!</span>
                    </div>
                  )}

                  {queryError && (
                    <div style={{ textAlign: 'center', padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ fontSize: '3.5rem' }}>🛑</span>
                      <strong style={{ fontSize: '1.25rem', color: 'var(--color-danger)' }}>HACK DETECTED & BLOCKED!</strong>
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '400px' }}>
                        The command was stopped because the template code didn't match the signature.
                      </span>
                      <pre style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', background: 'rgba(244,63,94,0.06)', border: '1px solid rgba(244,63,94,0.2)', padding: '0.6rem 0.9rem', borderRadius: '8px', width: '100%', whiteSpace: 'pre-wrap', wordBreak: 'break-all', color: 'var(--color-danger)' }}>
                        {queryError}
                      </pre>
                    </div>
                  )}

                  {!queryError && queryResult && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <span style={{ fontSize: '1.5rem' }}>✅</span>
                          <strong style={{ color: 'var(--color-success)', fontSize: '1.05rem' }}>Command Allowed!</strong>
                        </div>
                        <span className="badge badge-success">
                          {enableLayer2 ? '🔑 Decrypted Safely' : '🔒 Scrambled (AES-256)'}
                        </span>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        We successfully retrieved <strong>{queryResult.length}</strong> record(s):
                      </div>
                      <div className="table-container" style={{ flex: 1, maxHeight: '200px' }}>
                        <table className="db-table">
                          <thead>
                            <tr>
                              {Object.keys(queryResult[0]).map(key => <th key={key}>{key}</th>)}
                            </tr>
                          </thead>
                          <tbody>
                            {queryResult.map((row, idx) => (
                              <tr key={idx}>
                                {Object.entries(row).map(([key, val], colIdx) => {
                                  const isEncryptedFormat = val && typeof val === 'string' && val.includes(':') && val.length > 20;
                                  return (
                                    <td key={colIdx}>
                                      {isEncryptedFormat ? (
                                        <span className="ciphertext-pill">{val}</span>
                                      ) : (['email', 'credit_card', 'phone'].includes(key) ? (
                                        <span className="plaintext-pill">{String(val)}</span>
                                      ) : String(val))}
                                    </td>
                                  );
                                })}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h2>🐾 Guard Dog Check Steps</h2>
                <div className="flow-diagram-container" style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr auto 1fr auto 1fr', gap: '0.25rem', padding: '1rem', background: 'rgba(0,0,0,0.1)' }}>
                  <div className={`flow-node ${flowState !== 'IDLE' ? 'active' : ''}`} style={{ minWidth: 'auto', padding: '0.5rem' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>📥 Query Sent</div>
                  </div>
                  <div className="flow-arrow" style={{ alignSelf: 'center', animation: 'none' }}>➔</div>
                  <div className={`flow-node ${
                    flowState === 'L1_BLOCKED' ? 'danger' :
                    (flowState !== 'IDLE' && flowState !== 'PROCESSING' ? 'success' : '')
                  }`} style={{ minWidth: 'auto', padding: '0.5rem' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>🔍 L1 Check</div>
                  </div>
                  <div className="flow-arrow" style={{ alignSelf: 'center', animation: 'none' }}>➔</div>
                  <div className={`flow-node ${
                    flowState === 'L2_BYPASSED' ? 'danger' :
                    flowState === 'L2_DECRYPTED' ? 'success' : ''
                  }`} style={{ minWidth: 'auto', padding: '0.5rem' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>🔒 Decryption</div>
                  </div>
                  <div className="flow-arrow" style={{ alignSelf: 'center', animation: 'none' }}>➔</div>
                  <div className={`flow-node ${
                    flowState === 'L1_BLOCKED' ? 'danger' :
                    (flowState !== 'IDLE' && flowState !== 'PROCESSING' ? 'success' : '')
                  }`} style={{ minWidth: 'auto', padding: '0.5rem' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>🗄️ Output</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid-2" style={{ marginBottom: '2rem' }}>
            <div className="glass-panel">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h2>🗄️ How the Database Stores Secrets (Encrypted On Disk)</h2>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>What the hard drive actually sees!</span>
              </div>
              <p style={{ fontSize: '0.8rem', marginBottom: '1rem' }}>
                Notice that all sensitive fields like email and credit cards are stored in scrambled code, even if a hacker breaks into the computer's hard drive!
              </p>
              <div className="table-container" style={{ maxHeight: '250px' }}>
                <table className="db-table">
                  <thead>
                    <tr>
                      <th>id</th>
                      <th>username</th>
                      <th>email</th>
                      <th>credit_card</th>
                      <th>phone</th>
                      <th>role</th>
                      <th>balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rawDbRows.map(row => (
                      <tr key={row.id}>
                        <td>{row.id}</td>
                        <td style={{ fontWeight: '500' }}>{row.username}</td>
                        <td><span className="ciphertext-pill" title={row.email}>{row.email}</span></td>
                        <td><span className="ciphertext-pill" title={row.credit_card}>{row.credit_card}</span></td>
                        <td><span className="ciphertext-pill" title={row.phone}>{row.phone}</span></td>
                        <td>{row.role}</td>
                        <td style={{ color: 'var(--color-success)' }}>${row.balance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h2>📝 Guard Dog's Security Logs</h2>
                <span className="badge badge-success" style={{ animation: 'pulse 2s infinite' }}>● Live Monitoring</span>
              </div>
              <div className="terminal-console" style={{ flex: 1, maxHeight: '250px' }}>
                {threatLogs.length === 0 ? (
                  <div style={{ color: 'var(--text-muted)' }}>-- Listening for security events --</div>
                ) : (
                  threatLogs.map(log => {
                    let logTypeClass = 'info';
                    if (log.status === 'BLOCKED') logTypeClass = 'alert';
                    else if (log.status === 'THREAT DETECTED') logTypeClass = 'warn';
                    else if (log.status === 'INFO') logTypeClass = 'success';
                    return (
                      <div key={log.id} style={{ marginBottom: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.03)', paddingBottom: '0.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span className="terminal-line timestamp" style={{ fontSize: '0.75rem' }}>{new Date(log.timestamp).toLocaleTimeString()}</span>
                          <span className={`terminal-line ${logTypeClass}`} style={{ fontWeight: '600', fontSize: '0.75rem' }}>[{log.status === 'BLOCKED' ? '🛑 BLOCKED HACK' : log.status === 'THREAT DETECTED' ? '⚠️ HACK ATTEMPT' : '🟢 SAFE COMMAND'}]</span>
                        </div>
                        <div className="terminal-line" style={{ color: '#fff', fontSize: '0.8rem', marginTop: '0.2rem' }}><strong>Query Command:</strong> {log.query_text}</div>
                        <div className="terminal-line" style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', marginTop: '0.1rem' }}><strong>What Happened:</strong> {log.details}</div>
                        {log.mitigation && log.mitigation !== 'None' && (
                          <div className="terminal-line success" style={{ fontSize: '0.75rem', marginTop: '0.1rem' }}><strong>How we stopped it:</strong> {log.mitigation}</div>
                        )}
                      </div>
                    );
                  })
                )}
                <div ref={terminalEndRef} />
              </div>
            </div>
          </div>
        </>
      )}

      {/* TAB 2: DATA DEDUPLICATION CENTER */}
      {currentTab === 'dedup' && (
        <>
          <div className="metrics-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            <div className="glass-panel stat-card" style={{ borderLeft: '4px solid var(--color-success)', padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Good Contacts Saved</div>
                <div style={{ fontSize: '2.2rem', fontWeight: 'bold', margin: '0.2rem 0', color: '#fff' }}>{contacts.length}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-success)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <span style={{ fontSize: '0.9rem' }}>●</span> Clean, Safe Names
                </div>
              </div>
              <div style={{ fontSize: '2.5rem', opacity: '0.15' }}>🗄️</div>
            </div>
            <div className="glass-panel stat-card" style={{ borderLeft: '4px solid var(--color-warning)', padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Suspicious Doubles (Quarantine)</div>
                <div style={{ fontSize: '2.2rem', fontWeight: 'bold', margin: '0.2rem 0', color: '#fff' }}>{pendingReviews.length}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-warning)' }}>
                  Awaiting Your Choice
                </div>
              </div>
              <div style={{ fontSize: '2.5rem', opacity: '0.15' }}>⚖️</div>
            </div>
            <div className="glass-panel stat-card" style={{ borderLeft: '4px solid var(--color-danger)', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Duplicates Blocked</div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#fff' }}>{dedupLogs.filter(log => log.classification === 'DUPLICATE').length} Blocked!</div>
                </div>
                <div style={{ fontSize: '2rem', opacity: '0.15' }}>🛡️</div>
              </div>
              
              {/* Storage Space Bar Chart */}
              {(() => {
                const dupCount = dedupLogs.filter(log => log.classification === 'DUPLICATE').length + pendingReviews.length;
                const rawSize = (contacts.length + dupCount) * 0.45; // KB
                const cleanSize = contacts.length * 0.45; // KB
                const savingsPercent = rawSize > 0 ? Math.round(((rawSize - cleanSize) / rawSize) * 100) : 0;
                return (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', width: '100%', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '0.5rem', marginTop: '0.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                      <span>Storage Space Saved:</span>
                      <strong style={{ color: 'var(--color-success)' }}>{savingsPercent}% Saved</strong>
                    </div>
                    <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '3px', overflow: 'hidden', display: 'flex' }}>
                      <div style={{ width: `${100 - savingsPercent}%`, background: 'var(--color-secondary)', height: '100%' }} />
                      <div style={{ width: `${savingsPercent}%`, background: 'var(--color-success)', height: '100%' }} />
                    </div>
                  </div>
                );
              })()}
            </div>
            <div className="glass-panel stat-card" style={{ borderLeft: '4px solid var(--color-primary)', padding: '0.75rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Clean Database Meter</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem', maxWidth: '160px' }}>
                  Shows how clean your address book is (100% is perfect!).
                </div>
              </div>
              
              {/* SVG Radial Chart */}
              {(() => {
                const totalLogs = dedupLogs.length;
                const dupCount = dedupLogs.filter(log => log.classification === 'DUPLICATE').length;
                const cleanliness = totalLogs > 0 ? Math.round(((totalLogs - dupCount) / totalLogs) * 100) : 100;
                
                const circleRadius = 26;
                const circumference = 2 * Math.PI * circleRadius;
                const strokeDashoffset = circumference - (cleanliness / 100) * circumference;

                return (
                  <div style={{ position: 'relative', width: '70px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="70" height="70" viewBox="0 0 70 70" style={{ transform: 'rotate(-90deg)', position: 'absolute' }}>
                      <circle cx="35" cy="35" r={circleRadius} stroke="rgba(255,255,255,0.05)" strokeWidth="5" fill="transparent" />
                      <circle 
                        cx="35" 
                        cy="35" 
                        r={circleRadius} 
                        stroke="var(--color-primary)" 
                        strokeWidth="5" 
                        fill="transparent" 
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        style={{ transition: 'stroke-dashoffset 0.8s ease' }}
                      />
                    </svg>
                    <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#fff', zIndex: 1 }}>
                      {cleanliness}%
                    </span>
                  </div>
                );
              })()}
            </div>
          </div>

          {/* Core Panel Grid */}
          <div className="grid-3" style={{ marginBottom: '2rem' }}>
            
            {/* Panel 1: Data Ingestion Console */}
            <div className="glass-panel glowing" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <h2>1. Add a New Person</h2>
              
              <div>
                <label style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>Try these test buttons:</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <button 
                    className="btn btn-secondary" 
                    style={{ fontSize: '0.75rem', padding: '0.4rem 0.6rem', textAlign: 'left', justifyContent: 'flex-start', width: '100%' }}
                    onClick={() => applyDedupPreset({
                      first_name: 'Alice',
                      last_name: 'Johnson',
                      email: 'alice.johnson@gmail.com',
                      phone: '+1-555-555-0142',
                      company: 'Google Inc.'
                    })}
                  >
                    🔥 Exact Copy of Alice (Block this!)
                  </button>
                  
                  <button 
                    className="btn btn-secondary" 
                    style={{ fontSize: '0.75rem', padding: '0.4rem 0.6rem', textAlign: 'left', justifyContent: 'flex-start', width: '100%' }}
                    onClick={() => applyDedupPreset({
                      first_name: 'Alise',
                      last_name: 'Johnson',
                      email: 'alice.johnson@gmail.com',
                      phone: '+1-555-555-0142',
                      company: 'Google'
                    })}
                  >
                    ⚠️ Typo in Name (Alise instead of Alice)
                  </button>

                  <button 
                    className="btn btn-secondary" 
                    style={{ fontSize: '0.75rem', padding: '0.4rem 0.6rem', textAlign: 'left', justifyContent: 'flex-start', width: '100%' }}
                    onClick={() => applyDedupPreset({
                      first_name: 'Dave',
                      last_name: 'Miller',
                      email: 'david.miller@outlook.com',
                      phone: '',
                      company: 'Microsoft Corp'
                    })}
                  >
                    ⚠️ Typo in Company (Microsoft Corp vs Microsoft)
                  </button>

                  <button 
                    className="btn btn-secondary" 
                    style={{ fontSize: '0.75rem', padding: '0.4rem 0.6rem', textAlign: 'left', justifyContent: 'flex-start', width: '100%' }}
                    onClick={() => applyDedupPreset({
                      first_name: 'Sarah',
                      last_name: 'Connor',
                      email: 'sarah.connor@sky.net',
                      phone: '+1-555-555-2029',
                      company: 'Resistance'
                    })}
                  >
                    🟢 Brand New Person (Sarah Connor)
                  </button>
                </div>
              </div>

              <form onSubmit={handleIngestContact} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
                <div>
                  <label style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.25rem' }}>First Name *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    value={firstNameInput} 
                    onChange={e => setFirstNameInput(e.target.value)} 
                    placeholder="e.g. John" 
                    required 
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.25rem' }}>Last Name *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    value={lastNameInput} 
                    onChange={e => setLastNameInput(e.target.value)} 
                    placeholder="e.g. Smith" 
                    required 
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.25rem' }}>Email Address</label>
                  <input 
                    type="email" 
                    className="form-input" 
                    value={emailInput} 
                    onChange={e => setEmailInput(e.target.value)} 
                    placeholder="e.g. john.smith@gmail.com" 
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.25rem' }}>Phone Number</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    value={phoneInput} 
                    onChange={e => setPhoneInput(e.target.value)} 
                    placeholder="e.g. +1-555-555-1234" 
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.25rem' }}>Company</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    value={companyInput} 
                    onChange={e => setCompanyInput(e.target.value)} 
                    placeholder="e.g. Google" 
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  style={{ marginTop: 'auto', justifyContent: 'center', height: '40px', width: '100%' }}
                >
                  🚀 Send to Ingestion Robot
                </button>
              </form>

            </div>

            {/* Panel 2: Pipeline Ingestion Visualizer */}
            <div className="glass-panel glowing-success" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h2>2. Ingestion Robot Pipeline</h2>
              
              <div className="flow-diagram-container" style={{ flex: 1, justifyContent: 'center' }}>
                
                {/* Stage 1: Ingestion */}
                <div className={`flow-node ${evalPipeline.stage !== 'IDLE' ? 'active' : ''}`}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                    <span>📥</span> Ingesting Data
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '0.1rem' }}>
                    {evalPipeline.input ? `${evalPipeline.input.first_name} ${evalPipeline.input.last_name}` : 'Waiting...'}
                  </div>
                </div>

                <div className="flow-arrow">▼</div>

                {/* Stage 2: Normalization */}
                <div className={`flow-node ${
                  evalPipeline.stage === 'CHECKING' && evalPipeline.subStage === 0 ? 'active' :
                  (evalPipeline.stage !== 'IDLE' && (evalPipeline.stage !== 'CHECKING' || evalPipeline.subStage > 0) ? 'success' : '')
                }`}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                    <span>🧹</span> Cleaning Up Text
                    {evalPipeline.stage === 'CHECKING' && evalPipeline.subStage === 0 && <span className="scan-dot">●</span>}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '0.1rem' }}>
                    {evalPipeline.input ? `Clean email & phone` : 'Removing bad characters'}
                  </div>
                </div>

                <div className="flow-arrow">▼</div>

                {/* Stage 3: Match Evaluation */}
                <div className={`flow-node ${
                  evalPipeline.stage === 'CHECKING' && evalPipeline.subStage === 1 ? 'active' :
                  evalPipeline.stage === 'CHECKING' && evalPipeline.subStage === 2 ? 'active' :
                  evalPipeline.stage === 'DUPLICATE' ? 'danger' :
                  evalPipeline.stage === 'POTENTIAL_DUPLICATE' ? 'warning' :
                  evalPipeline.stage === 'UNIQUE' ? 'success' :
                  (evalPipeline.stage !== 'IDLE' && evalPipeline.stage !== 'CHECKING' ? 'success' : '')
                }`}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                    <span>🔍</span> Checking for Doubles
                    {evalPipeline.stage === 'CHECKING' && (evalPipeline.subStage === 1 || evalPipeline.subStage === 2) && <span className="scan-dot">●</span>}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '0.1rem' }}>
                    {evalPipeline.stage === 'DUPLICATE' ? 'Found Exact Copy!' :
                     evalPipeline.stage === 'POTENTIAL_DUPLICATE' ? `Spelling match! (${(evalPipeline.score * 100).toFixed(0)}%)` :
                     evalPipeline.stage === 'UNIQUE' ? 'Looks unique and safe!' : 
                     (evalPipeline.stage === 'CHECKING' && evalPipeline.subStage === 2 ? 'Checking details...' : 'Exact & Fuzzy checks')}
                  </div>
                </div>

                <div className="flow-arrow">▼</div>

                {/* Stage 4: Database Execution */}
                <div className={`flow-node ${
                  evalPipeline.stage === 'CHECKING' && evalPipeline.subStage === 3 ? 'active' :
                  evalPipeline.stage === 'DUPLICATE' ? 'danger' :
                  evalPipeline.stage === 'POTENTIAL_DUPLICATE' ? 'warning' :
                  evalPipeline.stage === 'UNIQUE' ? 'success' : ''
                }`}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                    <span>💾</span> Final Action Decision
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '0.1rem' }}>
                    {evalPipeline.stage === 'DUPLICATE' ? 'Blocked!' :
                     evalPipeline.stage === 'POTENTIAL_DUPLICATE' ? 'Quarantined!' :
                     evalPipeline.stage === 'UNIQUE' ? 'Saved to Book!' : 'Waiting...'}
                  </div>
                </div>

              </div>

              {/* Real-time details card */}
              {evalPipeline.stage !== 'IDLE' && (
                <div style={{
                  background: 'rgba(0,0,0,0.3)',
                  padding: '0.85rem',
                  borderRadius: '6px',
                  border: '1px solid ' + (
                    evalPipeline.stage === 'DUPLICATE' ? 'var(--color-danger)' :
                    evalPipeline.stage === 'POTENTIAL_DUPLICATE' ? 'var(--color-warning)' :
                    evalPipeline.stage === 'UNIQUE' ? 'var(--color-success)' : 'rgba(255,255,255,0.05)'
                  ),
                  fontSize: '0.8rem'
                }}>
                  <div style={{ fontWeight: 'bold', marginBottom: '0.25rem', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Robot Status:</span>
                    <span style={{ color: 
                      evalPipeline.stage === 'DUPLICATE' ? 'var(--color-danger)' :
                      evalPipeline.stage === 'POTENTIAL_DUPLICATE' ? 'var(--color-warning)' :
                      evalPipeline.stage === 'UNIQUE' ? 'var(--color-success)' : 'var(--color-primary)'
                    }}>{evalPipeline.stage}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    {evalPipeline.stage === 'CHECKING' && <span className="spinner-icon">⏳</span>}
                    <span>{evalPipeline.message}</span>
                  </div>
                  {evalPipeline.details && (
                    <div style={{ marginTop: '0.3rem', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                      <strong>Detail:</strong> {evalPipeline.details}
                    </div>
                  )}
                </div>
              )}

            </div>

            {/* Panel 3: Review Quarantine Queue */}
            <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h2>3. Double-Check Box ({pendingReviews.length})</h2>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                These contacts look very similar to names already in your book. Check the red highlighted details below and choose what to do!
              </p>
              
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem', overflowY: 'auto', maxHeight: '420px', paddingRight: '0.25rem' }}>
                {pendingReviews.length === 0 ? (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text-muted)', fontSize: '0.85rem', border: '1px dashed rgba(255,255,255,0.05)', borderRadius: '8px', padding: '2rem', textAlign: 'center' }}>
                    No records in quarantine. Database is perfectly clean.
                  </div>
                ) : (
                  pendingReviews.map(pending => {
                    const base = contacts.find(c => c.id === pending.matched_contact_id);
                    return (
                      <div key={pending.id} className="quarantine-card" style={{
                        background: 'rgba(0,0,0,0.25)',
                        border: '1px solid rgba(245,158,11,0.25)',
                        borderRadius: '8px',
                        padding: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem',
                        position: 'relative'
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--color-warning)' }}>
                            ⚠️ Check Record #{pending.id}
                          </span>
                          <span className="badge badge-warning" style={{ fontSize: '0.7rem' }}>
                            {(pending.similarity_score * 100).toFixed(0)}% Similarity Match
                          </span>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.75rem', marginTop: '0.25rem', background: 'rgba(0,0,0,0.2)', padding: '0.5rem', borderRadius: '4px' }}>
                          <div>
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.65rem', marginBottom: '0.2rem' }}>NEW INGESTED DETAILS</div>
                            <div style={{ fontWeight: '500' }}>
                              {highlightDiff(pending.first_name, base ? base.first_name : '')} {highlightDiff(pending.last_name, base ? base.last_name : '')}
                            </div>
                            <div style={{ wordBreak: 'break-all' }}>{highlightDiff(pending.email, base ? base.email : '')}</div>
                            <div>{highlightDiff(pending.phone, base ? base.phone : '')}</div>
                            <div style={{ color: 'var(--text-secondary)' }}>{highlightDiff(pending.company, base ? base.company : '')}</div>
                          </div>
                          
                          <div style={{ borderLeft: '1px solid rgba(255,255,255,0.05)', paddingLeft: '0.5rem' }}>
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.65rem', marginBottom: '0.2rem' }}>ALREADY IN BOOK</div>
                            {base ? (
                              <>
                                <div style={{ fontWeight: '500', color: '#fff' }}>{base.first_name} {base.last_name}</div>
                                {base.email && <div style={{ wordBreak: 'break-all', color: 'var(--text-secondary)' }}>{base.email}</div>}
                                {base.phone && <div style={{ color: 'var(--text-secondary)' }}>{base.phone}</div>}
                                {base.company && <div style={{ color: 'var(--text-muted)' }}>{base.company}</div>}
                              </>
                            ) : (
                              <div style={{ color: 'var(--text-muted)' }}>Base Contact #{pending.matched_contact_id} Deleted</div>
                            )}
                          </div>
                        </div>

                        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.4rem' }}>
                          <strong>Reason:</strong> {pending.reason}
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.4rem', marginTop: '0.25rem' }}>
                          <button 
                            className="btn btn-secondary" 
                            style={{ fontSize: '0.7rem', padding: '0.35rem 0.2rem', background: 'rgba(16,185,129,0.1)', borderColor: 'rgba(16,185,129,0.3)', color: 'var(--color-success)', cursor: 'pointer' }}
                            onClick={() => handleResolvePending(pending.id, 'APPROVE')}
                            title="Force ingestion as a unique contact"
                          >
                            Save Anyway
                          </button>
                          <button 
                            className="btn btn-secondary" 
                            style={{ fontSize: '0.7rem', padding: '0.35rem 0.2rem', background: 'rgba(59,130,246,0.1)', borderColor: 'rgba(59,130,246,0.3)', color: 'var(--color-primary)', cursor: 'pointer' }}
                            onClick={() => handleResolvePending(pending.id, 'MERGE')}
                            title="Update missing fields in the base record and discard this"
                          >
                            Combine Details
                          </button>
                          <button 
                            className="btn btn-secondary" 
                            style={{ fontSize: '0.7rem', padding: '0.35rem 0.2rem', background: 'rgba(239,68,68,0.1)', borderColor: 'rgba(239,68,68,0.3)', color: 'var(--color-danger)', cursor: 'pointer' }}
                            onClick={() => handleResolvePending(pending.id, 'REJECT')}
                            title="Discard this record as redundant duplicate"
                          >
                            Throw Away
                          </button>
                        </div>

                      </div>
                    );
                  })
                )}
              </div>

            </div>

          </div>

          {/* Database Viewer and Logs */}
          <div className="grid-2">
            
            {/* Contacts Table View */}
            <div className="glass-panel">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h2>📖 Your Clean Address Book</h2>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Unique contacts</span>
              </div>
              <p style={{ fontSize: '0.8rem', marginBottom: '1rem' }}>
                This table shows only clean, unique contacts that are verified. No duplicates are allowed here!
              </p>

              <div className="table-container" style={{ maxHeight: '300px' }}>
                <table className="db-table">
                  <thead>
                    <tr>
                      <th>id</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Company</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.length === 0 ? (
                      <tr>
                        <td colSpan="7" style={{ textAlign: 'center', color: 'var(--text-muted)' }}>No contacts in database. Click "Reset Contacts DB" to seed.</td>
                      </tr>
                    ) : (
                      contacts.map(c => (
                        <tr key={c.id}>
                          <td>{c.id}</td>
                          <td style={{ fontWeight: '500', color: '#fff' }}>{c.first_name}</td>
                          <td style={{ fontWeight: '500', color: '#fff' }}>{c.last_name}</td>
                          <td style={{ color: 'var(--color-secondary)' }}>{c.email || '--'}</td>
                          <td>{c.phone || '--'}</td>
                          <td>{c.company || '--'}</td>
                          <td><span className="badge badge-success" style={{ fontSize: '0.7rem' }}>{c.status || 'VERIFIED'}</span></td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Redundancy Logs / Audit Trail */}
            <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h2>📝 Robot's Live History Log</h2>
                <span className="badge badge-success" style={{ animation: 'pulse 2s infinite' }}>● Live Monitoring</span>
              </div>
              
              <div className="terminal-console" style={{ flex: 1, maxHeight: '300px', overflowY: 'auto' }}>
                {dedupLogs.length === 0 ? (
                  <div style={{ color: 'var(--text-muted)' }}>-- Waiting for someone to add a name... --</div>
                ) : (
                  dedupLogs.map(log => {
                    let logTypeClass = 'info';
                    if (log.classification === 'DUPLICATE') logTypeClass = 'alert';
                    else if (log.classification === 'POTENTIAL_DUPLICATE') logTypeClass = 'warn';
                    else if (log.classification === 'UNIQUE') logTypeClass = 'success';
                    else if (log.classification === 'MERGED') logTypeClass = 'info';

                    return (
                      <div key={log.id} style={{ marginBottom: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.03)', paddingBottom: '0.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span className="terminal-line timestamp" style={{ fontSize: '0.75rem' }}>
                            {new Date(log.timestamp).toLocaleTimeString()}
                          </span>
                          <span className={`terminal-line ${logTypeClass}`} style={{ fontWeight: '600', fontSize: '0.75rem' }}>
                            [{log.classification === 'DUPLICATE' ? 'DUPLICATE (Blocked!)' : log.classification === 'POTENTIAL_DUPLICATE' ? 'POTENTIAL DUPLICATE (Checking!)' : 'UNIQUE (Saved!)'}]
                          </span>
                        </div>
                        
                        <div className="terminal-line" style={{ color: '#fff', fontSize: '0.8rem', marginTop: '0.2rem' }}>
                          <strong>Ingested Data:</strong> {log.input_data}
                        </div>

                        <div className="terminal-line" style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', marginTop: '0.1rem' }}>
                          <strong>Robot Audit Report:</strong> {log.details}
                        </div>

                        {log.similarity_score > 0 && (
                          <div className="terminal-line success" style={{ fontSize: '0.75rem', marginTop: '0.1rem' }}>
                            <strong>Spelling Similarity:</strong> {(log.similarity_score * 100).toFixed(0)}%
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
                <div ref={dedupTerminalEndRef} />
              </div>
            </div>

          </div>
        </>
      )}

    </div>
  );
}

export default App;