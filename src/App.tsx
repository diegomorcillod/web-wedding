import React from 'react';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import TimelineSection from './components/TimelineSection';
import RSVPSection from './components/RSVPSection';
import InfoGridSection from './components/InfoGridSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen py-8 sm:py-12">
      <div className="max-w-3xl mx-auto">
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
