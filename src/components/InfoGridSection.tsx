import React from 'react';
import { weddingConfig } from '../config';

const InfoGridSection: React.FC = () => {
  return (
    <section className="mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Vestimenta */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-serif text-wedding-green-700 mb-3 flex items-center justify-center md:justify-start gap-2">
            <span className="inline-block hover:scale-125 hover:rotate-12 transition-transform duration-300">👗</span> Vestimenta
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            {weddingConfig.dressCodeText}
          </p>
        </div>

        {/* Regalos */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-serif text-wedding-green-700 mb-3 flex items-center justify-center md:justify-start gap-2">
            <span className="inline-block hover:scale-125 hover:-rotate-12 transition-transform duration-300">🎁</span> Regalos
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            {weddingConfig.giftsText}
          </p>
        </div>

        {/* Contacto */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-serif text-wedding-green-700 mb-3 flex items-center justify-center md:justify-start gap-2">
            <span className="inline-block hover:scale-125 hover:rotate-12 transition-transform duration-300 animate-pulse">📞</span> Contacto
          </h3>
          <div className="text-gray-700 text-sm space-y-2">
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
