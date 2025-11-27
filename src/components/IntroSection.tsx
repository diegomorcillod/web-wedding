import React from 'react';
import { weddingConfig } from '../config';

const IntroSection: React.FC = () => {
  return (
    <section className="mt-16 text-center">
      <h2 className="text-3xl font-serif text-wedding-green-700 mb-6">Bienvenidos</h2>
      
      <div className="max-w-2xl mx-auto space-y-4 text-gray-700 leading-relaxed">
        <p className="text-lg font-medium text-wedding-green-700">
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
