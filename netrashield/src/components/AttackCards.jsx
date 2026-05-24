// src/components/AttackCards.jsx
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { ATTACK_CARDS } from '../data/content'

function AttackCard({ card }) {
  return (
    <div
      className="attack-card"
      style={{
        flexShrink: 0, width: 280,
        background: 'var(--glass)', border: '1px solid var(--border)',
        borderRadius: 8, padding: '1.5rem',
        transition: 'all 0.3s', cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--cyan)'
        e.currentTarget.style.boxShadow = '0 0 40px rgba(0,212,255,0.2)'
        e.currentTarget.style.transform = 'translateY(-8px)'
        e.currentTarget.style.background = 'rgba(0,212,255,0.08)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.transform = 'none'
        e.currentTarget.style.background = 'var(--glass)'
      }}
    >
      <div style={{
        width: 48, height: 48, borderRadius: 8,
        background: 'rgba(0,212,255,0.1)', border: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.5rem', marginBottom: '1rem',
      }}>
        {card.icon}
      </div>
      <div style={{ fontFamily: "'Orbitron', monospace", fontSize: '0.9rem', fontWeight: 700, color: 'var(--cyan)', marginBottom: '0.5rem', letterSpacing: 1 }}>
        {card.title}
      </div>
      <div style={{ fontSize: '0.65rem', letterSpacing: 2, textTransform: 'uppercase', color: '#ff5555', marginBottom: '0.8rem' }}>
        {card.threat}
      </div>
      <div style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.6 }}>
        {card.desc}
      </div>
    </div>
  )
}

export default function AttackCards() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const doubled = [...ATTACK_CARDS, ...ATTACK_CARDS]

  return (
    <div style={{ padding: '4rem 0', background: 'linear-gradient(to bottom, transparent, rgba(0,20,50,0.3), transparent)' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem', textAlign: 'center', marginBottom: '2rem' }}
      >
        <span style={{ fontSize: '0.7rem', letterSpacing: 4, textTransform: 'uppercase', color: 'var(--cyan)', display: 'block', marginBottom: '1rem' }}>
          // ATTACK VECTORS
        </span>
        <h2 style={{ fontFamily: "'Orbitron', monospace", fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.2 }}>
          The threat landscape<br /><span style={{ color: 'var(--cyan)' }}>NetraShield defends against.</span>
        </h2>
      </motion.div>

      <div style={{ overflow: 'hidden', position: 'relative' }}>
        {/* Fade edges */}
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: 100, background: 'linear-gradient(to right, var(--bg), transparent)', zIndex: 10, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: 100, background: 'linear-gradient(to left, var(--bg), transparent)', zIndex: 10, pointerEvents: 'none' }} />

        <div
          className="attacks-track"
          style={{ display: 'flex', gap: '1.5rem', width: 'max-content', padding: '1rem 0' }}
        >
          {doubled.map((card, i) => <AttackCard key={i} card={card} />)}
        </div>
      </div>
    </div>
  )
}
