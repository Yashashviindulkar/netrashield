// src/components/BiometricsSection.jsx
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { BIOMETRIC_SIGNALS } from '../data/content'

function BioCard({ signal, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{
        background: 'var(--glass)', border: '1px solid var(--border)',
        borderRadius: 8, padding: '2rem',
        position: 'relative', overflow: 'hidden',
        transition: 'all 0.3s', cursor: 'default',
      }}
      whileHover={{
        y: -4,
        borderColor: 'rgba(0,212,255,0.4)',
        boxShadow: '0 20px 60px rgba(0,212,255,0.1)',
      }}
    >
      <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{signal.icon}</div>
      <div style={{ fontFamily: "'Orbitron', monospace", fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '0.8rem', letterSpacing: 1 }}>
        {signal.title}
      </div>
      <div style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '1.2rem' }}>
        {signal.desc}
      </div>

      {/* Accuracy bar */}
      <div style={{ height: 3, background: 'var(--dimmed)', borderRadius: 2, overflow: 'hidden', marginBottom: '0.5rem' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${signal.width}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: signal.delay, ease: 'easeOut' }}
          style={{
            height: '100%', borderRadius: 2,
            background: 'linear-gradient(90deg, var(--cyan), #0066ff)',
          }}
        />
      </div>
      <div style={{ fontSize: '0.7rem', color: 'var(--cyan)', letterSpacing: 2, textTransform: 'uppercase' }}>
        {signal.accuracy} · {signal.signals}
      </div>
    </motion.div>
  )
}

export default function BiometricsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="solution" style={{ padding: '6rem 2rem', maxWidth: 1200, margin: '0 auto' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <span style={{ fontSize: '0.7rem', letterSpacing: 4, textTransform: 'uppercase', color: 'var(--cyan)', display: 'block', marginBottom: '1rem' }}>
          // BEHAVIORAL INTELLIGENCE
        </span>
        <h2 style={{ fontFamily: "'Orbitron', monospace", fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.2, marginBottom: '1rem' }}>
          420+ invisible signals.<br /><span style={{ color: 'var(--cyan)' }}>Zero friction for users.</span>
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', maxWidth: 600, lineHeight: 1.8 }}>
          NetraShield's AI continuously analyzes subconscious behavioral patterns that are impossible to replicate — even with stolen credentials or deepfake impersonation.
        </p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem', marginTop: '3rem',
      }}>
        {BIOMETRIC_SIGNALS.map((s, i) => <BioCard key={i} signal={s} index={i} />)}
      </div>
    </section>
  )
}
