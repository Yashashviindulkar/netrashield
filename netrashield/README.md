# ⬡ NetraShield — AI Behavioral Fraud Defense

> "Faces can be forged. Human behavior cannot."

A cinematic, production-quality cybersecurity landing page built for banking hackathons and startup demos.

---

## Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS v3**
- **Framer Motion** — animations & scroll reveals
- **Lucide React** — icons
- **Google Fonts**: Orbitron · Rajdhani · JetBrains Mono

---

## Project Structure

```
netrashield/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── content.js          ← All text content & data
    └── components/
        ├── Navbar.jsx
        ├── HeroSection.jsx
        ├── LiveTicker.jsx
        ├── StorySection.jsx
        ├── AttackCards.jsx
        ├── BiometricsSection.jsx
        ├── FraudSimulation.jsx
        ├── Dashboard.jsx
        ├── FutureRoadmap.jsx
        └── Footer.jsx
```

---

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Install Framer Motion + Lucide React

```bash
npm install framer-motion lucide-react
```

### 3. Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
```

### 4. Start dev server

```bash
npm run dev
```

### 5. Build for production

```bash
npm run build
npm run preview
```

---

## Full Installation (fresh project)

```bash
# Create project
npm create vite@latest netrashield -- --template react
cd netrashield

# Install all deps
npm install
npm install framer-motion lucide-react
npm install -D tailwindcss postcss autoprefixer

# Copy all files from this repo into the project
# Replace src/ and config files

# Run
npm run dev
```

---

## Sections

| Section | Component | Description |
|---|---|---|
| Navbar | `Navbar.jsx` | Sticky glassmorphic navbar |
| Hero | `HeroSection.jsx` | Fullscreen cinematic hero + animated blobs |
| Ticker | `LiveTicker.jsx` | Auto-scrolling live threat ticker |
| Threat Story | `StorySection.jsx` | Timeline storytelling cards |
| Attack Cards | `AttackCards.jsx` | Infinite horizontal scroll |
| Biometrics | `BiometricsSection.jsx` | Solution cards with animated bars |
| Fraud Sim | `FraudSimulation.jsx` | AI fraud analysis panel + trust score ring |
| Dashboard | `Dashboard.jsx` | Live SOC dashboard with real-time updates |
| Roadmap | `FutureRoadmap.jsx` | Future initiatives cards |
| Footer | `Footer.jsx` | Clean branded footer |

---

## Customization

All text content is centralized in `src/data/content.js`. Edit there to update attack cards, metrics, roadmap items, and log entries.

---

## Design System

| Token | Value |
|---|---|
| Background | `#050816` deep navy |
| Accent | `#00d4ff` electric cyan |
| Blue | `#0066ff` electric blue |
| Muted | `#6b7db3` |
| Dimmed | `#3a4a7a` |
| Font Display | Orbitron |
| Font Body | Rajdhani |
| Font Mono | JetBrains Mono |

---

NetraShield © 2026 • AI-Powered Behavioral Fraud Defense
