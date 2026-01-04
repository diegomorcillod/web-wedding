import React from 'react';
import { weddingConfig } from '../config';

const InfoGridSection: React.FC = () => {
  return (
    <section className="mt-16">
      {/* Vestimenta */}
      <div className="text-center mb-16">
        <h3 className="text-2xl sm:text-3xl font-script text-canva-green uppercase tracking-wider mb-4">
          👗 Vestimenta
        </h3>
        <p className="text-canva-green max-w-xl mx-auto font-crimson leading-relaxed text-lg">
          Queremos que vengáis como más cómodas/os os sintáis, solo os pedimos un pequeño detalle: <span className="text-canva-pink font-semibold">evitar el color rosa</span>, ya que es el tono elegido para nuestro cortejo de honor. Asimismo, como la celebración será en jardín, recomendamos calzado cómodo para el césped (¡que no queremos tacones atrapados en la hierba!).
        </p>
      </div>

      {/* Regalos */}
      <div className="text-center mb-16">
        <h3 className="text-2xl sm:text-3xl font-script text-canva-green uppercase tracking-wider mb-4">
          🎁 Regalos
        </h3>
        <p className="text-canva-green max-w-xl mx-auto font-crimson leading-relaxed text-lg">
          {weddingConfig.giftsText}
        </p>
      </div>

      {/* Contacto */}
      <div className="text-center mb-12">
        <h3 className="text-2xl sm:text-3xl font-script text-canva-green uppercase tracking-wider mb-4">
          📞 Contacto
        </h3>
        <div className="text-canva-green max-w-xl mx-auto font-crimson text-lg space-y-2">
          {weddingConfig.contacts.map((contact, index) => (
            <p key={index}>
              <strong>{contact.name}:</strong> {contact.phone}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoGridSection;
