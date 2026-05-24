// src/components/LiveTicker.jsx
import { TICKER_ITEMS } from '../data/content'

export default function LiveTicker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <div style={{
      overflow: 'hidden',
      background: 'rgba(0,212,255,0.03)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '0.6rem 0',
    }}>
      <div
        className="ticker"
        style={{
          display: 'flex',
          gap: '4rem',
          whiteSpace: 'nowrap',
          width: 'max-content',
        }}
      >
        {doubled.map((item, i) => (
          <span key={i} style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.7rem', color: 'var(--muted)',
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
