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
