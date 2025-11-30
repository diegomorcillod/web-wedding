import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="text-center">
      {/* ¡NOS CASAMOS! - Grande y con efectos */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-script text-wedding-green-700 mb-8 tracking-wider uppercase animate-pulse">
        ¡NOS CASAMOS!
      </h2>
      
      {/* Líneas con corazón en el centro */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="h-0.5 w-20 sm:w-32 bg-wedding-green-600"></div>
        <div className="text-3xl sm:text-4xl text-wedding-pink-500 animate-heartbeat">
          ♥
        </div>
        <div className="h-0.5 w-20 sm:w-32 bg-wedding-green-600"></div>
      </div>
      
      {/* Nombres - Letra elegante tipo script */}
      <h1 className="text-6xl sm:text-7xl md:text-8xl font-great-vibes text-wedding-pink-500 mb-8 animate-fade-in" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
        Diego & Sofía
      </h1>
      
      {/* Fecha - Diseño especial como en el PDF */}
      <div className="flex items-center justify-center gap-6 sm:gap-8 mb-8">
        <div className="text-center">
          <p className="text-sm sm:text-base uppercase tracking-widest text-wedding-green-700 font-semibold mb-2">
            Sábado
          </p>
          <div className="h-0.5 w-20 bg-wedding-green-600 mx-auto"></div>
        </div>
        
        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-script text-wedding-green-700 uppercase tracking-wider mb-2">
            Junio
          </p>
          <p className="text-7xl sm:text-8xl font-script text-wedding-pink-500 leading-none">
            13
          </p>
          <p className="text-2xl sm:text-3xl font-script text-wedding-green-700 uppercase tracking-wider mt-2">
            2026
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-sm sm:text-base uppercase tracking-widest text-wedding-green-700 font-semibold mb-2">
            19:00h
          </p>
          <div className="h-0.5 w-20 bg-wedding-green-600 mx-auto"></div>
        </div>
      </div>
      
      <p className="text-gray-600 italic max-w-md mx-auto text-lg">
        ¡Nos emociona celebrar este día rodeados de nuestra gente favorita!
      </p>
    </section>
  );
};

export default Hero;
