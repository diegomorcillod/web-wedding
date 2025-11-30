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
        className="fixed inset-0 -z-10 opacity-20"
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

      {/* Flores decorativas en los laterales */}
      <div className="fixed inset-0 -z-5 pointer-events-none">
        {/* Flores lado izquierdo */}
        <div 
          className="absolute top-32 left-4 text-6xl opacity-70"
          style={{ 
            transform: `translateY(${scrollY * 0.15}px) rotate(${scrollY * 0.05}deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          🌸
        </div>
        <div 
          className="absolute top-96 left-8 text-5xl opacity-60"
          style={{ 
            transform: `translateY(${scrollY * 0.25}px) rotate(${-scrollY * 0.03}deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          🌺
        </div>
        <div 
          className="absolute bottom-64 left-2 text-7xl opacity-50"
          style={{ 
            transform: `translateY(${scrollY * -0.2}px) rotate(${scrollY * 0.04}deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          🌼
        </div>
        
        {/* Flores lado derecho */}
        <div 
          className="absolute top-48 right-6 text-5xl opacity-65"
          style={{ 
            transform: `translateY(${scrollY * 0.18}px) rotate(${-scrollY * 0.04}deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          🌷
        </div>
        <div 
          className="absolute top-80 right-4 text-6xl opacity-55"
          style={{ 
            transform: `translateY(${scrollY * 0.22}px) rotate(${scrollY * 0.06}deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          🌹
        </div>
        <div 
          className="absolute bottom-48 right-8 text-7xl opacity-60"
          style={{ 
            transform: `translateY(${scrollY * -0.15}px) rotate(${-scrollY * 0.03}deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          🌸
        </div>
        <div 
          className="absolute bottom-96 right-3 text-5xl opacity-50"
          style={{ 
            transform: `translateY(${scrollY * -0.25}px) rotate(${scrollY * 0.05}deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          🌺
        </div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="p-6 sm:p-10">
          <Hero />
          <IntroSection />
          
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
