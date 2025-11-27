import React from 'react';
import { weddingConfig } from '../config';

const InfoGridSection: React.FC = () => {
  return (
    <section className="mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Vestimenta */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-serif text-gray-800 mb-3 flex items-center justify-center md:justify-start gap-2">
            <span>👗</span> Vestimenta
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            {weddingConfig.dressCodeText}
          </p>
        </div>

        {/* Regalos */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-serif text-gray-800 mb-3 flex items-center justify-center md:justify-start gap-2">
            <span>🎁</span> Regalos
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            {weddingConfig.giftsText}
          </p>
        </div>

        {/* Contacto */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-serif text-gray-800 mb-3 flex items-center justify-center md:justify-start gap-2">
            <span>📞</span> Contacto
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

      {/* Ubicación */}
      <div className="border-t border-gray-200 pt-8 text-center">
        <h3 className="text-2xl font-serif text-gray-800 mb-4">
          📍 Ubicación
        </h3>
        <p className="text-gray-700 mb-6">
          La boda se celebrará en <strong>{weddingConfig.weddingLocation}</strong>.
        </p>
        <a
          href={weddingConfig.googleMapsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-full px-6 py-2 border border-gray-300 transition-colors duration-200"
        >
          Ver en Google Maps
        </a>
      </div>
    </section>
  );
};

export default InfoGridSection;
