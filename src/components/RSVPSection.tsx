import React from 'react';
import { weddingConfig } from '../config';

const RSVPSection: React.FC = () => {
  return (
    <section className="mt-16 text-center">
      <h2 className="text-3xl font-serif text-wedding-green-700 mb-6">
        Confirmar asistencia
      </h2>
      
      <p className="text-gray-700 mb-8 max-w-xl mx-auto">
        Para ayudarnos con la organización, te agradeceríamos que confirmes tu 
        asistencia antes del <strong>1 de mayo de 2026</strong> a través del 
        siguiente formulario.
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
