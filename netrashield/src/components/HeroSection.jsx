// src/components/HeroSection.jsx
import { motion } from 'framer-motion'

const stats = [
  { num: '99.8%', label: 'Detection Rate' },
  { num: '<50ms', label: 'Latency' },
  { num: '0.001%', label: 'False Positives' },
  { num: '420+', label: 'Signal Vectors' },
]

export default function HeroSection() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      textAlign: 'center',
      position: 'relative',
      padding: '6rem 2rem 4rem',
    }}>
      {/* Animated blobs */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, overflow: 'hidden' }}>
        <div className="cyber-grid-bg" style={{ position: 'absolute', inset: 0 }} />
        <div style={{
          position: 'absolute', width: 600, height: 600,
          background: 'rgba(0,102,255,0.12)',
          borderRadius: '50%', filter: 'blur(100px)',
          top: -100, left: -100,
          animation: 'float1 8s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', width: 500, height: 500,
          background: 'rgba(0,212,255,0.08)',
          borderRadius: '50%', filter: 'blur(80px)',
          bottom: 0, right: -50,
          animation: 'float2 10s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', width: 300, height: 300,
          background: 'rgba(0,255,204,0.06)',
          borderRadius: '50%', filter: 'blur(60px)',
          top: '50%', left: '50%',
          animation: 'float3 12s ease-in-out infinite',
        }} />
      </div>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          background: 'var(--glass)', border: '1px solid var(--border)',
          padding: '0.5rem 1.2rem', borderRadius: 50,
          fontSize: '0.75rem', letterSpacing: 2,
          textTransform: 'uppercase', color: 'var(--cyan)',
          marginBottom: '2rem',
        }}
      >
        <div style={{
          width: 6, height: 6, borderRadius: '50%',
          background: 'var(--cyan)',
          animation: 'pulse 2s infinite',
          boxShadow: '0 0 10px var(--cyan)',
        }} />
        AI BEHAVIORAL INTELLIGENCE PLATFORM
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{
          fontFamily: "'Orbitron', monospace",
          fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
          fontWeight: 900, lineHeight: 1.1,
          letterSpacing: -1, marginBottom: '1.5rem',
        }}
      >
        <span className="grad-text">Faces can be forged.</span>
        <br />
        Human behavior cannot.
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        style={{
          fontSize: '1.1rem', color: 'var(--muted)',
          maxWidth: 600, margin: '0 auto 3rem',
          lineHeight: 1.8,
        }}
      >
        NetraShield detects fraud before credentials are abused by analyzing
        behavioral biometrics invisible to attackers.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
      >
        <button
          style={{
            background: 'linear-gradient(135deg, var(--cyan), #0066ff)',
            color: '#000', border: 'none',
            padding: '0.9rem 2rem',
            fontFamily: "'Orbitron', monospace",
            fontSize: '0.8rem', fontWeight: 700,
            letterSpacing: 1, borderRadius: 4,
            cursor: 'pointer', transition: 'all 0.3s',
            textTransform: 'uppercase',
          }}
          onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 10px 40px rgba(0,212,255,0.4)' }}
          onMouseLeave={e => { e.target.style.transform = 'none'; e.target.style.boxShadow = 'none' }}
        >
          ⚡ LAUNCH SIMULATION
        </button>
        <button
          style={{
            background: 'transparent', color: 'var(--cyan)',
            border: '1px solid var(--border)',
            padding: '0.9rem 2rem',
            fontFamily: "'Orbitron', monospace",
            fontSize: '0.8rem', fontWeight: 700,
            letterSpacing: 1, borderRadius: 4,
            cursor: 'pointer', transition: 'all 0.3s',
            textTransform: 'uppercase',
          }}
          onMouseEnter={e => { e.target.style.background = 'var(--glass)'; e.target.style.borderColor = 'var(--cyan)'; e.target.style.transform = 'translateY(-2px)' }}
          onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.borderColor = 'var(--border)'; e.target.style.transform = 'none' }}
        >
          ◈ EXPLORE THREATS
        </button>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        style={{
          display: 'flex', gap: '3rem', justifyContent: 'center',
          marginTop: '4rem', flexWrap: 'wrap',
        }}
      >
        {stats.map((s, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: "'Orbitron', monospace",
              fontSize: '2rem', fontWeight: 900,
              color: 'var(--cyan)',
              textShadow: '0 0 20px rgba(0,212,255,0.5)',
            }}>{s.num}</div>
            <div style={{
              fontSize: '0.75rem', color: 'var(--muted)',
              letterSpacing: 2, textTransform: 'uppercase', marginTop: '0.3rem',
            }}>{s.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
