// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '3rem 2rem', textAlign: 'center',
      background: 'var(--bg2)',
    }}>
      <div style={{
        fontFamily: "'Orbitron', monospace",
        fontSize: '1.5rem', fontWeight: 900,
        color: 'var(--cyan)',
        textShadow: '0 0 30px rgba(0,212,255,0.5)',
        marginBottom: '1rem',
      }}>
        ⬡ NETRASHIELD
      </div>
      <p style={{ color: 'var(--muted)', fontSize: '0.9rem', maxWidth: 500, margin: '0 auto 1.5rem', lineHeight: 1.8 }}>
        AI-powered behavioral fraud defense for modern banking systems. Protecting what credentials cannot.
      </p>
      <p style={{ color: 'var(--dimmed)', fontSize: '0.8rem', letterSpacing: 2, textTransform: 'uppercase' }}>
        NetraShield © 2026 &nbsp;•&nbsp; AI-Powered Behavioral Fraud Defense &nbsp;•&nbsp; Built for the next era of banking security
      </p>
    </footer>
  )
}
