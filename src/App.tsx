import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import TimelineSection from './components/TimelineSection';
import RSVPSection from './components/RSVPSection';
import InfoGridSection from './components/InfoGridSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen py-8 sm:py-12 relative overflow-hidden">
      {/* Fondo dinámico con parallax */}
      <div 
        className="fixed inset-0 -z-10 opacity-30"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        {/* Formas decorativas */}
        <div 
          className="absolute top-20 left-10 w-64 h-64 bg-wedding-pink-500 rounded-full mix-blend-multiply filter blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
        <div 
          className="absolute top-40 right-10 w-72 h-72 bg-wedding-green-500 rounded-full mix-blend-multiply filter blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        ></div>
        <div 
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-wedding-pink-600 rounded-full mix-blend-multiply filter blur-3xl"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        ></div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="bg-white/90 shadow-xl rounded-2xl p-6 sm:p-10">
          <Hero />
          <IntroSection />
          
          {/* Título de la sección de timeline */}
          <div className="text-center mt-20 mb-12">
            <h2 className="text-4xl sm:text-5xl font-script text-wedding-green-700 uppercase tracking-wider mb-4">
              ¿Vienes a celebrarlo con
            </h2>
            <h2 className="text-4xl sm:text-5xl font-script text-wedding-green-700 uppercase tracking-wider">
              nosotros?
            </h2>
          </div>
          
          <TimelineSection />
          <RSVPSection />
          <InfoGridSection />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
