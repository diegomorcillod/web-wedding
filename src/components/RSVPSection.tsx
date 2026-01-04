import React from 'react';
import { weddingConfig } from '../config';

const RSVPSection: React.FC = () => {
  return (
    <section className="mt-16 text-center">
      <p className="text-canva-green mb-6 max-w-xl mx-auto font-crimson">
        Nos encantaría contar contigo en este día tan especial.
      </p>
      <p className="text-canva-green mb-8 max-w-xl mx-auto font-crimson">
        Hemos preparado un formulario donde, aparte de confirmar la asistencia, 
        os preguntamos información importante a tener en cuenta para que ese día 
        no os tengáis que preocupar de nada 😊
      </p>
      <p className="text-canva-green mb-8 max-w-xl mx-auto font-crimson">
        Para organizarnos bien y cuidar cada detalle, por favor rellena el 
        formulario antes del <strong>{weddingConfig.rsvpDeadline}</strong>.
      </p>
      
      <a
        href={weddingConfig.rsvpFormUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-block bg-wedding-pink-600 hover:bg-wedding-pink-700 text-white font-crimson font-semibold rounded-full px-8 py-3 shadow-lg transition-colors duration-200"
      >
        Confirmar asistencia
      </a>
    </section>
  );
};

export default RSVPSection;
