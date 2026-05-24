// src/components/StorySection.jsx
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stories = [
  {
    step: 'STEP 01 / CREDENTIAL THEFT',
    heading: 'PHASE I — IDENTITY HARVESTED',
    desc: 'Attackers obtain username/password pairs through phishing, dark web purchases, or data breaches. Modern credential stuffing tools test millions of combinations per hour. Traditional MFA is bypassed via SIM swapping and SS7 exploits. By the time your security team is alerted, the attacker has already authenticated.',
    tag: '2.8B credentials exposed annually',
  },
  {
    step: 'STEP 02 / IDENTITY CLONING',
    heading: 'PHASE II — PERSONA RECONSTRUCTED',
    desc: 'Using generative AI, the attacker constructs a synthetic identity profile — deepfake video for verification, voice clones for call center bypass, and behavioral scripts trained on stolen social data. Face ID, voice authentication, and liveness checks are defeated. The impersonation is indistinguishable to human agents.',
    tag: 'Deepfake fraud up 3000% since 2022',
  },
  {
    step: 'STEP 03 / FRAUD EXECUTION',
    heading: 'PHASE III — ASSETS EXFILTRATED',
    desc: 'Now authenticated as the victim, the attacker initiates high-value transfers, account takeovers, or credit applications. Transaction monitoring fails because all credential signals appear legitimate. The victim discovers the breach days later. Average loss per incident exceeds $43,000 for retail banking customers.',
    tag: '$487B in fraud losses projected by 2027',
  },
]

function StoryCard({ story, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      style={{ display: 'flex', gap: '2rem', padding: '2rem 0 2rem 5rem', position: 'relative' }}
    >
      {/* Timeline dot */}
      <div style={{
        position: 'absolute', left: '1.4rem', top: '2.5rem',
        width: 14, height: 14, borderRadius: '50%',
        background: 'var(--bg)', border: '2px solid var(--cyan)',
        boxShadow: '0 0 15px var(--cyan)',
      }} />

      <div
        style={{
          background: 'var(--glass)', border: '1px solid var(--border)',
          borderRadius: 8, padding: '1.5rem 2rem', flex: 1,
          transition: 'all 0.3s', cursor: 'default',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'var(--cyan)'
          e.currentTarget.style.background = 'rgba(0,212,255,0.08)'
          e.currentTarget.style.boxShadow = '0 0 30px rgba(0,212,255,0.1)'
          e.currentTarget.style.transform = 'translateX(8px)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'var(--border)'
          e.currentTarget.style.background = 'var(--glass)'
          e.currentTarget.style.boxShadow = 'none'
          e.currentTarget.style.transform = 'none'
        }}
      >
        <div style={{ fontSize: '0.65rem', letterSpacing: 3, textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem' }}>
          {story.step}
        </div>
        <div style={{ fontFamily: "'Orbitron', monospace", fontSize: '1.1rem', fontWeight: 700, color: 'var(--cyan)', marginBottom: '0.8rem', letterSpacing: 1 }}>
          {story.heading}
        </div>
        <div style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
          {story.desc}
        </div>
        <div style={{
          display: 'inline-block', marginTop: '0.8rem',
          padding: '0.25rem 0.75rem', borderRadius: 3,
          fontSize: '0.65rem', letterSpacing: 2, textTransform: 'uppercase',
          background: 'rgba(255,50,50,0.1)', color: '#ff5555',
          border: '1px solid rgba(255,50,50,0.2)',
        }}>
          {story.tag}
        </div>
      </div>
    </motion.div>
  )
}

export default function StorySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="threats" style={{ padding: '6rem 2rem', maxWidth: 1200, margin: '0 auto' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <span style={{ fontSize: '0.7rem', letterSpacing: 4, textTransform: 'uppercase', color: 'var(--cyan)', display: 'block', marginBottom: '1rem' }}>
          // THREAT INTELLIGENCE
        </span>
        <h2 style={{ fontFamily: "'Orbitron', monospace", fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.2, marginBottom: '1rem' }}>
          How modern fraud unfolds<br /><span style={{ color: 'var(--cyan)' }}>in three silent steps.</span>
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', maxWidth: 600, lineHeight: 1.8 }}>
          Attackers no longer need brute force. They exploit identity at the behavioral layer, where traditional security is blind.
        </p>
      </motion.div>

      {/* Timeline line */}
      <div style={{ position: 'relative', marginTop: '4rem' }}>
        <div style={{
          position: 'absolute', left: '2rem', top: 0, bottom: 0,
          width: 1,
          background: 'linear-gradient(to bottom, transparent, var(--cyan), transparent)',
          opacity: 0.4,
        }} />
        {stories.map((s, i) => <StoryCard key={i} story={s} index={i} />)}
      </div>
    </section>
  )
}
