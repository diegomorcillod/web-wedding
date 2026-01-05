import React from 'react';
import { weddingConfig } from '../config';

const IntroSection: React.FC = () => {
  return (
    <section className="mt-16 text-center">
      <h2 className="text-2xl sm:text-3xl font-script text-canva-green mb-4 uppercase tracking-wider">
        ¡Bienvenidos a nuestra boda!
      </h2>
      <h3 className="text-xl sm:text-2xl font-script text-canva-green-light mb-8 uppercase tracking-wider">
        en Castillo Bonavía
      </h3>
      
      {/* Botón de ubicación */}
      <a
        href={weddingConfig.googleMapsUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-3 bg-canva-pink hover:bg-[#B07878] text-white font-crimson font-bold text-lg rounded-full px-10 py-4 mb-8 shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
      >
        <span className="text-2xl">📍</span>
        Ver ubicación
      </a>
      
      {/* Foto del castillo */}
      <div className="max-w-2xl mx-auto mb-12 px-4">
        <div className="overflow-hidden rounded-t-[40%] rounded-b-[40%] shadow-xl">
          <img 
            src="/images/foto4.jpeg" 
            alt="Castillo Bonavía" 
            className="w-full h-80 object-cover"
          />
        </div>
      </div>
      
      <div className="max-w-2xl mx-auto space-y-4 text-canva-green leading-relaxed text-lg font-crimson">
        <p className="font-semibold">
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
