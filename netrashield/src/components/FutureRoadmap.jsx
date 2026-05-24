// src/components/FutureRoadmap.jsx
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ROADMAP_ITEMS } from '../data/content'

function RoadCard({ item, index }) {
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
      whileHover={{ y: -4, borderColor: 'rgba(0,212,255,0.4)', boxShadow: '0 20px 60px rgba(0,212,255,0.08)' }}
    >
      {/* Top glow line on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: 1,
          background: 'linear-gradient(90deg, transparent, var(--cyan), transparent)',
        }}
      />
      <div style={{ fontSize: '0.65rem', letterSpacing: 3, color: 'var(--dimmed)', marginBottom: '1rem', textTransform: 'uppercase' }}>
        {item.number}
      </div>
      <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
      <div style={{ fontFamily: "'Orbitron', monospace", fontSize: '0.9rem', fontWeight: 700, color: '#fff', marginBottom: '0.8rem', letterSpacing: 1 }}>
        {item.title}
      </div>
      <div style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '1.2rem' }}>
        {item.desc}
      </div>
      <div style={{
        display: 'inline-block', padding: '0.25rem 0.75rem',
        borderRadius: 3, fontSize: '0.65rem', letterSpacing: 2,
        textTransform: 'uppercase',
        background: 'rgba(0,212,255,0.08)', color: 'var(--cyan)',
        border: '1px solid var(--border)',
      }}>
        {item.badge}
      </div>
    </motion.div>
  )
}

export default function FutureRoadmap() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="roadmap" style={{ padding: '6rem 2rem', maxWidth: 1200, margin: '0 auto' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <span style={{ fontSize: '0.7rem', letterSpacing: 4, textTransform: 'uppercase', color: 'var(--cyan)', display: 'block', marginBottom: '1rem' }}>
          // FUTURE ROADMAP
        </span>
        <h2 style={{ fontFamily: "'Orbitron', monospace", fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.2, marginBottom: '1rem' }}>
          Building the future<br /><span style={{ color: 'var(--cyan)' }}>of behavioral security.</span>
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', maxWidth: 600, lineHeight: 1.8 }}>
          NetraShield's research division is pioneering the next generation of AI-driven fraud defense technologies for the post-quantum banking era.
        </p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem', marginTop: '3rem',
      }}>
        {ROADMAP_ITEMS.map((item, i) => <RoadCard key={i} item={item} index={i} />)}
      </div>
    </section>
  )
}
