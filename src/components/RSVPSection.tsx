import React from 'react';
import { weddingConfig } from '../config';

const RSVPSection: React.FC = () => {
  return (
    <section className="mt-4 text-center">
      <p className="text-canva-green mb-6 max-w-xl mx-auto font-crimson leading-relaxed text-lg">
        Nos encantaría contar contigo en este día tan especial.
      </p>
      <p className="text-canva-green mb-8 max-w-xl mx-auto font-crimson leading-relaxed text-lg">
        Hemos preparado un formulario donde, aparte de confirmar la asistencia, 
        os preguntamos información importante a tener en cuenta para que ese día 
        no os tengáis que preocupar de nada 😊
      </p>
      <p className="text-canva-green mb-8 max-w-xl mx-auto font-crimson leading-relaxed text-lg">
        Para organizarnos bien y cuidar cada detalle, por favor rellena el 
        formulario antes del <strong>{weddingConfig.rsvpDeadline}</strong>.
      </p>
      
      {/* Botón destacado con decoración */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8">
        {/* Flechas izquierda */}
        <div className="flex gap-1 animate-pulse">
          <span className="text-wedding-pink-600 text-lg sm:text-xl md:text-2xl">→</span>
          <span className="text-wedding-pink-600 text-lg sm:text-xl md:text-2xl animate-bounce">→</span>
        </div>
        
        <a
          href={weddingConfig.rsvpFormUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-wedding-pink-600 hover:bg-wedding-pink-700 text-white font-crimson font-bold text-base sm:text-xl md:text-2xl rounded-full px-6 sm:px-10 md:px-12 py-4 sm:py-5 shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_20px_50px_rgba(244,150,177,0.5)] whitespace-nowrap"
        >
          ✨ Confirmar asistencia ✨
        </a>
        
        {/* Flechas derecha */}
        <div className="flex gap-1 animate-pulse">
          <span className="text-wedding-pink-600 text-lg sm:text-xl md:text-2xl animate-bounce">←</span>
          <span className="text-wedding-pink-600 text-lg sm:text-xl md:text-2xl">←</span>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;
