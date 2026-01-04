import React from 'react';
import { weddingConfig } from '../config';

const IntroSection: React.FC = () => {
  return (
    <section className="mt-16 text-center">
      <h2 className="text-3xl sm:text-4xl font-script text-canva-green mb-4 uppercase tracking-wider">
        Bienvenidos a nuestra boda
      </h2>
      <h3 className="text-2xl sm:text-3xl font-script text-canva-green-light mb-8 uppercase tracking-wider">
        en Castillo Bonavía
      </h3>
      
      {/* Botón de ubicación */}
      <a
        href={weddingConfig.googleMapsUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 bg-wedding-pink-500 hover:bg-wedding-pink-600 text-white font-crimson font-semibold rounded-full px-8 py-3 mb-12 shadow-lg transition-all duration-300 hover:scale-105"
      >
        <span className="text-xl">📍</span>
        Ver ubicación
      </a>
      
      <div className="max-w-2xl mx-auto space-y-4 text-gray-700 leading-relaxed text-lg font-crimson">
        <p className="font-semibold text-wedding-green-700">
          Nos hace mucha ilusión compartir este día con vosotros.
        </p>
        <p>
          No es solo una boda, es una celebración con los de siempre y con los más cercanos, 
          familia, amigos y los que habéis estado ahí en cada etapa importante.
        </p>
        <p>
          Queremos que viváis este día sin mirar el reloj, con alegría, con calma, 
          con ganas de reír, bailar y compartir.
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
