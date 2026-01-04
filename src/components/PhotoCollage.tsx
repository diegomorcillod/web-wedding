import React from 'react';

const PhotoCollage: React.FC = () => {
  return (
    <div className="mt-8 sm:mt-12 max-w-5xl mx-auto px-2 sm:px-4">
      <div className="grid grid-cols-3 gap-2 sm:gap-4">
        {/* Foto 1 */}
        <div className="overflow-hidden rounded-t-[50%] rounded-b-[30%] shadow-lg">
          <img 
            src="/images/foto1.jpg" 
            alt="Diego y Sofía" 
            className="w-full h-48 sm:h-64 md:h-80 object-cover"
          />
        </div>
        
        {/* Foto 2 */}
        <div className="overflow-hidden rounded-t-[40%] rounded-b-[40%] shadow-lg">
          <img 
            src="/images/foto2.jpeg" 
            alt="Diego y Sofía" 
            className="w-full h-48 sm:h-64 md:h-80 object-cover"
          />
        </div>
        
        {/* Foto 3 */}
        <div className="overflow-hidden rounded-t-[30%] rounded-b-[50%] shadow-lg">
          <img 
            src="/images/foto3.jpeg" 
            alt="Diego y Sofía" 
            className="w-full h-48 sm:h-64 md:h-80 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoCollage;
