
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import EmpathySection from './components/EmpathySection';
import ValueStack from './components/ValueStack';
import ImagineSection from './components/ImagineSection';
import PricingSection from './components/PricingSection';
import ChatAssistant from './components/ChatAssistant';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Dynamic Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="font-serif text-2xl font-bold text-brown-warm">
            Conectar <span className="italic text-coral-red">sin Culpa</span>
          </div>
          <a 
            href="#pricing"
            className="hidden md:block bg-coral-red text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 transition-colors shadow-lg"
          >
            Obtener Oferta $10
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <EmpathySection />
        <ValueStack />
        <ImagineSection />
        <PricingSection />
      </main>

      <Footer />
      
      {/* Floating AI Assistant for empathetic support */}
      <ChatAssistant />
    </div>
  );
};

export default App;
