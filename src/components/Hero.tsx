import React from 'react';
import { weddingConfig } from '../config';

const Hero: React.FC = () => {
  return (
    <section className="text-center">
      <p className="text-sm uppercase tracking-wider text-wedding-pink-600 mb-4">
        ¡Nos casamos!
      </p>
      
      <h1 className="text-5xl sm:text-6xl font-serif text-wedding-green-700 mb-6">
        {weddingConfig.coupleNames}
      </h1>
      
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="h-px w-16 bg-wedding-pink-500"></div>
        <div className="w-2 h-2 bg-wedding-pink-600 rounded-full"></div>
        <div className="h-px w-16 bg-wedding-pink-500"></div>
      </div>
      
      <div className="space-y-2 text-gray-700 mb-6">
        <p className="text-xl font-light">{weddingConfig.weddingDate}</p>
        <p className="text-lg">{weddingConfig.weddingLocation}</p>
      </div>
      
      <p className="text-gray-600 italic max-w-md mx-auto">
        Nos hace mucha ilusión compartir este día con vosotros.
      </p>
    </section>
  );
};

export default Hero;
