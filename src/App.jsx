import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import TimelineSection from './components/TimelineSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Particles from './utils/Particles';
import EnhancedMouseTracker from './utils/EnhancedMouseTracker';
import NeonBackground from './utils/NeonBackground';
import FloatingNeonElements from './utils/FloatingNeonElements';
import NeonGridLines from './utils/NeonGridLines';
import DigitalRain from './utils/DigitalRain';
import HolographicScan from './utils/HolographicScan';
import CyberGrid from './utils/CyberGrid';
import HackerElements from './utils/HackerElements';
import CorruptedData from './utils/CorruptedData';
import TerminalCode from './utils/TerminalCode';
import Background3D from './utils/Background3D';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload fonts and resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-x-hidden">
      {/* Ambient Neon Backgrounds */}
      <NeonBackground />
      
      {/* Particles background */}
      <Particles count={30} />

      {/* Enhanced Mouse tracker for custom cursor */}
      <EnhancedMouseTracker />
      
      {/* Terminal Code Window Removed */}
      <Background3D />
      {/* Loading screen */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Sticky navbar */}
        <Navbar />

        {/* Main sections */}
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ServicesSection />
          <TimelineSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Gradient overlays for smooth transitions */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-dark-bg/0 via-transparent to-dark-bg/0 z-40" />
    </div>
  );
}

export default App;
