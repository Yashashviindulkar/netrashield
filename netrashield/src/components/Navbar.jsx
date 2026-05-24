// src/components/Navbar.jsx
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['threats', 'solution', 'simulation', 'dashboard', 'roadmap']

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '1rem 2rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(5,8,22,0.95)' : 'rgba(5,8,22,0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
        transition: 'all 0.3s',
      }}
    >
      <div style={{
        fontFamily: "'Orbitron', monospace",
        fontSize: '1.2rem', fontWeight: 900,
        color: 'var(--cyan)', letterSpacing: 2,
        textShadow: '0 0 20px var(--cyan)',
      }}>
        ⬡ NETRASHIELD
      </div>

      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
        {links.map(link => (
          <li key={link} style={{ display: 'none' }} className="md-show">
            <a
              href={`#${link}`}
              style={{
                color: 'var(--muted)', textDecoration: 'none',
                fontSize: '0.85rem', letterSpacing: 1,
                textTransform: 'uppercase', transition: 'color 0.3s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <button style={{
        background: 'linear-gradient(135deg, var(--cyan), var(--electric-blue, #0066ff))',
        color: '#000', border: 'none',
        padding: '0.4rem 1rem', borderRadius: 4,
        fontFamily: "'Orbitron', monospace",
        fontSize: '0.75rem', fontWeight: 700,
        letterSpacing: 1, cursor: 'pointer',
      }}>
        REQUEST ACCESS
      </button>
    </motion.nav>
  )
}
