// src/components/Dashboard.jsx
import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { INITIAL_LOGS, LIVE_LOGS } from '../data/content'

const typeStyles = {
  crit: { bg: 'rgba(255,50,50,0.15)', color: '#ff5555', border: '1px solid rgba(255,50,50,0.3)', label: 'CRITICAL' },
  warn: { bg: 'rgba(255,170,0,0.15)', color: '#ffaa00', border: '1px solid rgba(255,170,0,0.3)', label: 'WARNING' },
  info: { bg: 'rgba(0,212,255,0.1)', color: 'var(--cyan)', border: '1px solid var(--border)', label: 'INFO' },
  ok: { bg: 'rgba(0,255,136,0.1)', color: '#00ff88', border: '1px solid rgba(0,255,136,0.3)', label: 'RESOLVED' },
}

function LogItem({ log }) {
  const style = typeStyles[log.type] || typeStyles.info
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      style={{
        display: 'flex', alignItems: 'center', gap: '0.8rem',
        padding: '0.5rem 0.7rem', borderRadius: 4,
      }}
    >
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--dimmed)', minWidth: 55 }}>{log.time}</span>
      <span style={{
        fontSize: '0.6rem', letterSpacing: 1, padding: '0.15rem 0.5rem',
        borderRadius: 2, textTransform: 'uppercase', minWidth: 65, textAlign: 'center',
        background: style.bg, color: style.color, border: style.border,
      }}>{style.label}</span>
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: 'var(--muted)', flex: 1 }}>{log.msg}</span>
    </motion.div>
  )
}

export default function Dashboard() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [logs, setLogs] = useState(INITIAL_LOGS)
  const [sessions, setSessions] = useState(247384)
  const [threats, setThreats] = useState(1847)
  const [latencyIdx, setLatencyIdx] = useState(0)
  const latencies = ['38ms', '41ms', '43ms', '47ms', '39ms', '44ms', '42ms', '36ms', '48ms']
  let logIdx = useRef(0)

  useEffect(() => {
    const sessInterval = setInterval(() => {
      setSessions(s => s + Math.floor(Math.random() * 20) + 5)
      setThreats(t => t + (Math.random() > 0.5 ? 1 : 0))
    }, 2000)
    const latInterval = setInterval(() => {
      setLatencyIdx(i => (i + 1) % latencies.length)
    }, 1500)
    const logInterval = setInterval(() => {
      const log = LIVE_LOGS[logIdx.current % LIVE_LOGS.length]
      logIdx.current++
      const now = new Date()
      const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`
      setLogs(prev => [{ ...log, time }, ...prev.slice(0, 11)])
    }, 3000)
    return () => { clearInterval(sessInterval); clearInterval(latInterval); clearInterval(logInterval) }
  }, [])

  return (
    <section id="dashboard" style={{ padding: '6rem 2rem', maxWidth: 1200, margin: '0 auto' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <span style={{ fontSize: '0.7rem', letterSpacing: 4, textTransform: 'uppercase', color: 'var(--cyan)', display: 'block', marginBottom: '1rem' }}>
          // SECURITY OPERATIONS CENTER
        </span>
        <h2 style={{ fontFamily: "'Orbitron', monospace", fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.2, marginBottom: '1rem' }}>
          Enterprise SOC dashboard.<br /><span style={{ color: 'var(--cyan)' }}>Always-on threat visibility.</span>
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', maxWidth: 600, lineHeight: 1.8 }}>
          Real-time monitoring across your entire banking infrastructure — from mobile apps to core banking systems.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{
          display: 'grid', gridTemplateColumns: '2fr 1fr',
          gap: '1.5rem', marginTop: '3rem',
        }}
      >
        {/* Log Feed */}
        <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 8, overflow: 'hidden' }}>
          <div style={{
            background: 'rgba(0,212,255,0.04)', borderBottom: '1px solid var(--border)',
            padding: '0.8rem 1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <span style={{ fontFamily: "'Orbitron', monospace", fontSize: '0.7rem', letterSpacing: 2, textTransform: 'uppercase', color: 'var(--cyan)' }}>◈ LIVE THREAT LOG</span>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00ff88', boxShadow: '0 0 10px #00ff88', animation: 'pulse 2s infinite' }} />
          </div>
          <div style={{ padding: '0.5rem', maxHeight: 380, overflowY: 'auto' }}>
            {logs.map((log, i) => <LogItem key={`${log.time}-${i}`} log={log} />)}
          </div>
        </div>

        {/* Metrics Panel */}
        <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 8, overflow: 'hidden' }}>
          <div style={{
            background: 'rgba(0,212,255,0.04)', borderBottom: '1px solid var(--border)',
            padding: '0.8rem 1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <span style={{ fontFamily: "'Orbitron', monospace", fontSize: '0.7rem', letterSpacing: 2, textTransform: 'uppercase', color: 'var(--cyan)' }}>◈ LIVE METRICS</span>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00ff88', boxShadow: '0 0 10px #00ff88', animation: 'pulse 2s infinite' }} />
          </div>
          <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {[
              { num: sessions.toLocaleString(), color: 'var(--cyan)', label: 'Sessions analyzed today' },
              { num: threats.toLocaleString(), color: '#ff5555', label: 'Threats blocked today' },
              { num: '99.8%', color: '#00ff88', label: 'System uptime · 30 days' },
              { num: latencies[latencyIdx], color: '#ffaa00', label: 'Avg inference latency' },
            ].map((m, i) => (
              <div key={i} style={{
                background: 'rgba(0,0,0,0.3)', border: '1px solid var(--border)',
                borderRadius: 6, padding: '1rem', textAlign: 'center',
              }}>
                <div style={{ fontFamily: "'Orbitron', monospace", fontSize: '1.6rem', fontWeight: 900, color: m.color, lineHeight: 1, textShadow: `0 0 20px ${m.color}66` }}>
                  {m.num}
                </div>
                <div style={{ fontSize: '0.6rem', letterSpacing: 2, textTransform: 'uppercase', color: 'var(--muted)', marginTop: '0.4rem' }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
