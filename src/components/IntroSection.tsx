import React from 'react';
import { weddingConfig } from '../config';

const IntroSection: React.FC = () => {
  return (
    <section className="mt-16 text-center">
      <h2 className="text-3xl font-serif text-wedding-green-700 mb-6">Bienvenidos</h2>
      
      <div className="max-w-2xl mx-auto space-y-4 text-gray-700 leading-relaxed">
        <p>
          Será un día muy especial para nosotros celebrar nuestra boda en el 
          majestuoso {weddingConfig.weddingLocation.split('·')[0].trim()}.
        </p>
        <p>
          Estamos muy agradecidos de poder compartir este momento único con las 
          personas que más queremos. Vuestra presencia es el mejor regalo que 
          podemos recibir.
        </p>
        <p>
          ¡Preparaos para disfrutar de una jornada inolvidable llena de amor, 
          risas y buenos momentos!
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
