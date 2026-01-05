import React from 'react';
import PhotoCollage from './PhotoCollage';

const Hero: React.FC = () => {
  return (
    <section className="text-center px-4">
      {/* ¡NOS CASAMOS! - Grande y con efectos */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-script font-bold text-canva-green mb-6 sm:mb-8 tracking-wider uppercase animate-pulse">
        ¡NOS CASAMOS!
      </h2>
      
      {/* Líneas con corazón en el centro */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div className="h-0.5 w-16 sm:w-20 md:w-32 bg-wedding-green-600"></div>
        <div className="animate-heartbeat">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="#e9adb1" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
        <div className="h-0.5 w-16 sm:w-20 md:w-32 bg-wedding-green-600"></div>
      </div>
      
      {/* Nombres - Letra elegante tipo script */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-script text-canva-pink mb-6 sm:mb-8 animate-fade-in" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
        Diego & Sofía
      </h1>
      
      {/* Fecha - Diseño especial como en el PDF */}
      <div className="flex items-center justify-center gap-6 sm:gap-8 mb-8">
        <div className="text-center">
          <p className="text-sm sm:text-base uppercase tracking-widest text-canva-green font-semibold mb-2">
            Sábado
          </p>
          <div className="h-0.5 w-20 bg-wedding-green-600 mx-auto"></div>
        </div>
        
        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-script text-canva-green-light uppercase tracking-wider mb-2">
            Junio
          </p>
          <p className="text-7xl sm:text-8xl font-script text-canva-pink leading-none">
            13
          </p>
          <p className="text-2xl sm:text-3xl font-script text-canva-green-light uppercase tracking-wider mt-2">
            2026
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-sm sm:text-base uppercase tracking-widest text-canva-green font-semibold mb-2">
            19:00h
          </p>
          <div className="h-0.5 w-20 bg-wedding-green-600 mx-auto"></div>
        </div>
      </div>
      
      <p className="text-gray-600 italic max-w-md mx-auto text-lg text-canva-green">
        ¡Nos emociona celebrar este día rodeados de nuestra gente favorita!
      </p>
      
      {/* Collage de fotos */}
      <PhotoCollage />
    </section>
  );
};

export default Hero;
