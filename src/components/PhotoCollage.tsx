import React from 'react';

const PhotoCollage: React.FC = () => {
  return (
    <div className="mt-12 max-w-4xl mx-auto px-4">
      <div className="grid grid-cols-3 gap-4">
        {/* Foto 1 */}
        <div className="overflow-hidden rounded-t-[50%] rounded-b-[30%] shadow-lg">
          <img 
            src="/images/foto1.jpg" 
            alt="Diego y Sofía" 
            className="w-full h-64 object-cover"
          />
        </div>
        
        {/* Foto 2 */}
        <div className="overflow-hidden rounded-t-[40%] rounded-b-[40%] shadow-lg">
          <img 
            src="/images/foto2.jpeg" 
            alt="Diego y Sofía" 
            className="w-full h-64 object-cover"
          />
        </div>
        
        {/* Foto 3 - Nota: .heic no es compatible con navegadores, necesitarás convertirla a .jpg */}
        <div className="overflow-hidden rounded-t-[30%] rounded-b-[50%] shadow-lg">
          <img 
            src="/images/foto3.heic" 
            alt="Diego y Sofía" 
            className="w-full h-64 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoCollage;
