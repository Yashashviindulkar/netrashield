/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#050816',
        navy2: '#080d1f',
        navy3: '#0a1128',
        cyan: '#00d4ff',
        'cyan-glow': '#00ffcc',
        'electric-blue': '#0066ff',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'monospace'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s infinite',
        'scroll-cards': 'scrollCards 30s linear infinite',
        'scan': 'scan 4s linear infinite',
        'alert-blink': 'alertBlink 3s infinite',
        'bar-fill': 'barFill 2s ease forwards',
        'fade-up': 'fadeUp 0.8s ease forwards',
        'tick': 'tick 20s linear infinite',
        'log-slide': 'logSlide 0.4s ease',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-30px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.5, transform: 'scale(1.5)' },
        },
        scrollCards: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scan: {
          '0%': { top: 0 },
          '100%': { top: '100%' },
        },
        alertBlink: {
          '0%, 100%': { borderColor: 'rgba(255,50,50,0.3)' },
          '50%': { borderColor: 'rgba(255,50,50,0.8)', boxShadow: '0 0 20px rgba(255,50,50,0.2)' },
        },
        barFill: {
          to: { width: 'var(--w, 80%)' },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(30px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        tick: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        logSlide: {
          from: { opacity: 0, transform: 'translateX(-10px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'cyber-grid': `linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
    },
  },
  plugins: [],
}
