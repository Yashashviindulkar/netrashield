// src/App.jsx
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import LiveTicker from './components/LiveTicker'
import StorySection from './components/StorySection'
import AttackCards from './components/AttackCards'
import BiometricsSection from './components/BiometricsSection'
import FraudSimulation from './components/FraudSimulation'
import Dashboard from './components/Dashboard'
import FutureRoadmap from './components/FutureRoadmap'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LiveTicker />
        <StorySection />
        <AttackCards />
        <BiometricsSection />
        <FraudSimulation />
        <Dashboard />
        <FutureRoadmap />
      </main>
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, var(--border), transparent)', maxWidth: 1200, margin: '0 auto' }} />
      <Footer />
    </>
  )
}
