import React from 'react';
import { weddingConfig } from '../config';

const Footer: React.FC = () => {
  return (
    <footer className="mt-16 pt-8 border-t border-gray-200 text-center">
      <p className="text-gray-700 italic mb-3">
        Gracias por acompañarnos en este día tan especial.
      </p>
      <p className="text-sm text-gray-500">
        {weddingConfig.coupleNames} · {weddingConfig.weddingDate}
      </p>
    </footer>
  );
};

export default Footer;
