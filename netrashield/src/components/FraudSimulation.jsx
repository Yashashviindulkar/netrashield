// src/components/FraudSimulation.jsx
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FRAUD_METRICS } from '../data/content'

const statusColors = {
  ok: '#00ff88',
  warn: '#ffaa00',
  danger: '#ff5555',
}

const statusGradients = {
  ok: 'linear-gradient(90deg, #00ff88, #00dd66)',
  warn: 'linear-gradient(90deg, #ffaa00, #ff7700)',
  danger: 'linear-gradient(90deg, #ff5555, #ff0000)',
}

export default function FraudSimulation() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="simulation" style={{ padding: '6rem 2rem', maxWidth: 1200, margin: '0 auto' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <span style={{ fontSize: '0.7rem', letterSpacing: 4, textTransform: 'uppercase', color: 'var(--cyan)', display: 'block', marginBottom: '1rem' }}>
          // AI FRAUD ANALYSIS ENGINE
        </span>
        <h2 style={{ fontFamily: "'Orbitron', monospace", fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.2, marginBottom: '1rem' }}>
          Real-time threat assessment.<br /><span style={{ color: 'var(--cyan)' }}>Sub-50ms decision latency.</span>
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', maxWidth: 600, lineHeight: 1.8 }}>
          Watch NetraShield's neural inference engine process a live authentication attempt — analyzing 420+ behavioral signals simultaneously.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{
          background: 'var(--bg2)', border: '1px solid var(--border)',
          borderRadius: 12, overflow: 'hidden', marginTop: '3rem',
        }}
      >
        {/* Panel Header */}
        <div style={{
          background: 'rgba(0,212,255,0.05)', borderBottom: '1px solid var(--border)',
          padding: '1rem 1.5rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ fontFamily: "'Orbitron', monospace", fontSize: '0.8rem', fontWeight: 700, letterSpacing: 2, color: 'var(--cyan)' }}>
            ⬡ NETRASHIELD / FRAUD ANALYSIS ENGINE v4.2
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.7rem', letterSpacing: 2, textTransform: 'uppercase', color: '#00ff88' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00ff88', boxShadow: '0 0 10px #00ff88', animation: 'pulse 1.5s infinite' }} />
            ENGINE ACTIVE
          </div>
        </div>

        <div style={{
          padding: '2rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
        }}>
          {/* Trust Score Ring */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: 160, height: 160, marginBottom: '1.5rem' }}>
              <svg viewBox="0 0 160 160" style={{ width: 160, height: 160, transform: 'rotate(-90deg)' }}>
                <circle fill="none" stroke="var(--dimmed)" strokeWidth="8" cx="80" cy="80" r="70" />
                <motion.circle
                  fill="none" stroke="var(--cyan)" strokeWidth="8"
                  strokeLinecap="round" cx="80" cy="80" r="70"
                  strokeDasharray="440"
                  initial={{ strokeDashoffset: 440 }}
                  animate={inView ? { strokeDashoffset: 110 } : { strokeDashoffset: 440 }}
                  transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
                  style={{ filter: 'drop-shadow(0 0 8px var(--cyan))' }}
                />
              </svg>
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)', textAlign: 'center',
              }}>
                <div style={{ fontFamily: "'Orbitron', monospace", fontSize: '2.2rem', fontWeight: 900, color: 'var(--cyan)', lineHeight: 1 }}>75</div>
                <div style={{ fontSize: '0.6rem', letterSpacing: 2, textTransform: 'uppercase', color: 'var(--muted)', marginTop: '0.3rem' }}>TRUST SCORE</div>
              </div>
            </div>
            <div style={{ fontFamily: "'Orbitron', monospace", fontSize: '0.7rem', letterSpacing: 2, textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: '0.5rem' }}>
              ⚠ ELEVATED RISK DETECTED
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--muted)', textAlign: 'center', maxWidth: 160, lineHeight: 1.6 }}>
              Behavioral deviation exceeds threshold. Manual review recommended.
            </div>
          </div>

          {/* Metrics */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {FRAUD_METRICS.map((m, i) => (
              <div key={i} style={{
                background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border)',
                borderRadius: 6, padding: '0.8rem 1rem',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.7rem', letterSpacing: 1, textTransform: 'uppercase', color: 'var(--muted)' }}>{m.name}</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', fontWeight: 500, color: statusColors[m.status] }}>{m.label}</span>
                </div>
                <div style={{ height: 4, background: 'var(--dimmed)', borderRadius: 2, overflow: 'hidden' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${m.value}%` } : { width: 0 }}
                    transition={{ duration: 1.2, delay: 0.5 + i * 0.1 }}
                    style={{
                      height: '100%', borderRadius: 2,
                      background: statusGradients[m.status],
                      boxShadow: m.status === 'danger' ? '0 0 10px #ff555588' : 'none',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Alert Box */}
          <div
            className="alert-box"
            style={{
              gridColumn: '1 / -1',
              background: 'rgba(255,50,50,0.05)',
              border: '1px solid rgba(255,50,50,0.3)',
              borderRadius: 6, padding: '1rem 1.5rem',
              display: 'flex', alignItems: 'center', gap: '1rem',
            }}
          >
            <div style={{ fontSize: '1.5rem' }}>🚨</div>
            <div>
              <div style={{ fontSize: '0.7rem', letterSpacing: 2, textTransform: 'uppercase', color: '#ff5555', marginBottom: '0.3rem', fontWeight: 700 }}>
                CRITICAL — MULTI-SIGNAL FRAUD DETECTED
              </div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: '#ff8888' }}>
                Voice authenticity failed (0.18) + Device mismatch + Impossible geo velocity. Session flagged for immediate review. Transaction BLOCKED. Incident ID: NS-2026-847291
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
