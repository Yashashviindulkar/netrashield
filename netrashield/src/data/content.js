// src/data/content.js

export const ATTACK_CARDS = [
  {
    icon: '🎭',
    title: 'DEEPFAKE ATTACKS',
    threat: 'CRITICAL THREAT',
    desc: 'Generative AI creates hyper-realistic video and image deepfakes that bypass facial recognition, liveness detection, and KYC verification systems at scale.',
  },
  {
    icon: '📱',
    title: 'OTP INTERCEPTION',
    threat: 'HIGH THREAT',
    desc: 'SS7 network exploits, SIM swapping, and real-time phishing proxies intercept one-time passwords before users can enter them, defeating standard 2FA.',
  },
  {
    icon: '🎙️',
    title: 'VOICE CLONING',
    threat: 'CRITICAL THREAT',
    desc: 'With as little as 3 seconds of audio, AI systems replicate a target\'s voice with 97% accuracy, defeating call center verification and voice biometrics.',
  },
  {
    icon: '⛓️',
    title: 'SESSION HIJACKING',
    threat: 'HIGH THREAT',
    desc: 'Attackers steal authenticated session tokens via malicious browser extensions, MITM attacks, or XSS exploits to assume active banking sessions invisibly.',
  },
  {
    icon: '🤖',
    title: 'BOT ACCOUNT TAKEOVER',
    threat: 'HIGH THREAT',
    desc: 'Orchestrated bot networks execute credential stuffing at scale across millions of accounts, using residential proxies to evade rate limiting and IP blocks.',
  },
  {
    icon: '💉',
    title: 'MALWARE INJECTION',
    threat: 'MEDIUM THREAT',
    desc: 'Banking trojans inject malicious code into legitimate banking apps to manipulate transaction data, alter beneficiary details, and exfiltrate credentials silently.',
  },
  {
    icon: '🕵️',
    title: 'INSIDER THREATS',
    threat: 'MEDIUM THREAT',
    desc: 'Compromised or malicious insiders with privileged access execute unauthorized transactions, exfiltrate customer data, or facilitate external fraud rings undetected.',
  },
]

export const BIOMETRIC_SIGNALS = [
  {
    icon: '⌨️',
    title: 'TYPING RHYTHM',
    desc: 'Every keystroke encodes a unique temporal fingerprint — dwell time, flight time, and rhythm patterns tied to cognitive motor memory that cannot be replicated.',
    accuracy: '94.2%',
    signals: '127 sub-signals',
    width: 94,
    delay: 0.2,
  },
  {
    icon: '🖱️',
    title: 'MOUSE DYNAMICS',
    desc: 'Cursor velocity, acceleration curves, micro-tremors, and click pressure patterns create a biometric signature as unique as a fingerprint — constantly updated.',
    accuracy: '91.7%',
    signals: '89 sub-signals',
    width: 91,
    delay: 0.4,
  },
  {
    icon: '📱',
    title: 'DEVICE FINGERPRINT',
    desc: 'Hardware attestation, sensor calibration drift, accelerometer patterns, and GPU rendering signatures create an unforgeable device identity that evolves over time.',
    accuracy: '98.1%',
    signals: '156 sub-signals',
    width: 98,
    delay: 0.6,
  },
  {
    icon: '🧭',
    title: 'NAVIGATION BEHAVIOR',
    desc: 'Session flow, scroll patterns, feature access sequences, and temporal rhythms reveal whether the authenticated user is the legitimate account owner.',
    accuracy: '87.3%',
    signals: '48 sub-signals',
    width: 87,
    delay: 0.8,
  },
]

export const FRAUD_METRICS = [
  { name: '⌨ TYPING CONSISTENCY', value: 92, status: 'ok', label: 'NORMAL · 92%' },
  { name: '🖱 MOUSE ENTROPY', value: 61, status: 'warn', label: 'ANOMALY · 61%' },
  { name: '🎙 VOICE AUTHENTICITY', value: 18, status: 'danger', label: 'FAIL · 18%' },
  { name: '📱 DEVICE FINGERPRINT', value: 54, status: 'warn', label: 'MISMATCH · 54%' },
  { name: '🧭 SESSION NAVIGATION', value: 88, status: 'ok', label: 'NORMAL · 88%' },
  { name: '🌐 GEO VELOCITY', value: 5, status: 'danger', label: 'IMPOSSIBLE · 0%' },
]

export const INITIAL_LOGS = [
  { time: '14:32:07', type: 'crit', msg: 'Deepfake identity verification attempt — User ID 84729 — BLOCKED' },
  { time: '14:31:54', type: 'warn', msg: 'OTP replay attempt detected — Session terminated — IP flagged' },
  { time: '14:31:40', type: 'ok', msg: 'Behavioral anomaly cleared — Score restored 0.31 → 0.89' },
  { time: '14:31:22', type: 'info', msg: 'Session isolated — Device fingerprint delta exceeded threshold 0.85' },
  { time: '14:31:08', type: 'crit', msg: 'Voice clone detected — Call center auth bypassed — ESCALATED' },
  { time: '14:30:51', type: 'warn', msg: 'Impossible geo velocity — Mumbai→London in 4min — Session HELD' },
  { time: '14:30:33', type: 'info', msg: 'Model retrained — 2,847 new behavioral samples ingested' },
  { time: '14:30:15', type: 'ok', msg: 'Bot network neutralized — 1,247 credential stuffing attempts blocked' },
  { time: '14:29:58', type: 'crit', msg: 'Insider anomaly detected — Privileged access pattern deviation — QUARANTINED' },
  { time: '14:29:41', type: 'info', msg: 'Threat intelligence sync complete — 847 new IOCs ingested from network' },
]

export const LIVE_LOGS = [
  { type: 'crit', msg: 'Transaction fraud detected — High-value transfer to unverified account — BLOCKED' },
  { type: 'warn', msg: 'Typing pattern deviation 47% — Step-up authentication triggered' },
  { type: 'info', msg: 'New device enrolled — Behavioral baseline training initiated' },
  { type: 'ok', msg: 'Fraud ring dismantled — 23 linked accounts quarantined successfully' },
  { type: 'crit', msg: 'Account takeover attempt — Bot-driven credential stuffing — 847 IPs blocked' },
  { type: 'warn', msg: 'Session anomaly — Navigation pattern inconsistent with user baseline' },
  { type: 'info', msg: 'Risk model updated — Precision improved 0.3% — v4.2.1 deployed' },
]

export const ROADMAP_ITEMS = [
  {
    number: 'INITIATIVE 01 / Q3 2026',
    icon: '🧠',
    title: 'AI INSIDER THREAT PREDICTION',
    desc: 'Graph neural networks model the relational behavior of all employees simultaneously, predicting insider threat risk before malicious actions occur — 72-hour advance warning capability.',
    badge: 'IN DEVELOPMENT',
  },
  {
    number: 'INITIATIVE 02 / Q1 2027',
    icon: '⚛️',
    title: 'QUANTUM-READY AUTHENTICATION',
    desc: 'Post-quantum cryptographic protocols combined with behavioral biometrics create an authentication system resistant to both quantum computing attacks and adversarial AI impersonation.',
    badge: 'RESEARCH PHASE',
  },
  {
    number: 'INITIATIVE 03 / Q4 2026',
    icon: '🤖',
    title: 'AUTONOMOUS FRAUD RESPONSE',
    desc: 'AI agent networks autonomously investigate, contain, and remediate fraud incidents without human intervention — reducing mean time to respond from hours to milliseconds.',
    badge: 'BETA ACCESS',
  },
  {
    number: 'INITIATIVE 04 / Q2 2027',
    icon: '🌐',
    title: 'CROSS-BANK THREAT INTELLIGENCE',
    desc: 'Federated learning enables banks to collaboratively train fraud detection models on shared threat intelligence without exposing sensitive customer data — industry-wide behavioral baselines.',
    badge: 'PLANNED',
  },
]

export const TICKER_ITEMS = [
  '🔴 LIVE  OTP replay blocked — Session ID 7x9f',
  '⚠ Behavioral anomaly — User 3847 — Score dropped to 0.31',
  '🛡 Deepfake detected — Identity verification failed',
  '🔴 LIVE  Session isolated — Device fingerprint mismatch',
  '⚠ Voice clone attempt — Authenticity score 0.12',
  '🛡 Suspicious login blocked — 3 anomalous signals detected',
]
