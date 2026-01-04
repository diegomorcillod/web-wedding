import React from 'react';

const PhotoCollage: React.FC = () => {
  return (
    <div className="mt-8 sm:mt-12 max-w-5xl mx-auto px-2 sm:px-4">
      <div className="grid grid-cols-3 gap-2 sm:gap-4">
        {/* Foto 1 */}
        <div className="overflow-hidden rounded-[30%] shadow-lg">
          <img 
            src="/images/foto1.jpg" 
            alt="Diego y Sofía" 
            className="w-full h-56 sm:h-72 md:h-96 object-cover"
          />
        </div>
        
        {/* Foto 2 */}
        <div className="overflow-hidden rounded-[30%] shadow-lg">
          <img 
            src="/images/foto2.jpeg" 
            alt="Diego y Sofía" 
            className="w-full h-56 sm:h-72 md:h-96 object-cover"
          />
        </div>
        
        {/* Foto 3 */}
        <div className="overflow-hidden rounded-[30%] shadow-lg">
          <img 
            src="/images/foto3.jpeg" 
            alt="Diego y Sofía" 
            className="w-full h-56 sm:h-72 md:h-96 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoCollage;
