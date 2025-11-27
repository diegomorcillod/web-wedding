import React from 'react';
import { weddingConfig } from '../config';

const InfoGridSection: React.FC = () => {
  return (
    <section className="mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Vestimenta - Fuente: Crimson Text (elegante y clásica) */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-crimson font-semibold text-wedding-green-700 mb-3 flex items-center justify-center md:justify-start gap-2">
            <span className="inline-block hover:scale-125 hover:rotate-12 transition-transform duration-300">👗</span> Vestimenta
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed font-crimson">
            {weddingConfig.dressCodeText}
          </p>
        </div>

        {/* Regalos - Fuente: Merriweather (moderna y legible) */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-merriweather font-bold text-wedding-green-700 mb-3 flex items-center justify-center md:justify-start gap-2">
            <span className="inline-block hover:scale-125 hover:-rotate-12 transition-transform duration-300">🎁</span> Regalos
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed font-merriweather font-light">
            {weddingConfig.giftsText}
          </p>
        </div>

        {/* Contacto - Fuente: Libre Baskerville (tradicional y sofisticada) */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-baskerville font-bold text-wedding-green-700 mb-3 flex items-center justify-center md:justify-start gap-2">
            <span className="inline-block hover:scale-125 hover:rotate-12 transition-transform duration-300 animate-pulse">📞</span> Contacto
          </h3>
          <div className="text-gray-700 text-sm space-y-2 font-baskerville">
            {weddingConfig.contacts.map((contact, index) => (
              <p key={index}>
                <strong>{contact.name}:</strong> {contact.phone}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoGridSection;
