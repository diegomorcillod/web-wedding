import React from 'react';
import { weddingConfig } from '../config';

const RSVPSection: React.FC = () => {
  return (
    <section className="mt-16 text-center">
      <h2 className="text-3xl font-serif text-wedding-green-700 mb-6">
        Confirmar asistencia
      </h2>
      
      <p className="text-gray-700 mb-6 max-w-xl mx-auto">
        Nos encantaría contar contigo en este día tan especial.
      </p>
      <p className="text-gray-700 mb-8 max-w-xl mx-auto">
        Hemos preparado un formulario donde, aparte de confirmar la asistencia, 
        os preguntamos información importante a tener en cuenta para que ese día 
        no os tengáis que preocupar de nada 😊
      </p>
      <p className="text-gray-700 mb-8 max-w-xl mx-auto">
        Para organizarnos bien y cuidar cada detalle, por favor rellena el 
        formulario antes del <strong>{weddingConfig.rsvpDeadline}</strong>.
      </p>
      
      <a
        href={weddingConfig.rsvpFormUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-block bg-wedding-pink-600 hover:bg-wedding-pink-700 text-white font-medium rounded-full px-8 py-3 shadow-lg transition-colors duration-200"
      >
        Rellenar formulario
      </a>
    </section>
  );
};

export default RSVPSection;
