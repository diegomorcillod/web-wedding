import React, { useEffect, useRef, useState } from 'react';
import { weddingConfig } from '../config';

const TimelineSection: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => [...new Set([...prev, index])]);
            } else {
              setVisibleItems((prev) => prev.filter((i) => i !== index));
            }
          });
        },
        { threshold: 0.2 }
      );

      if (ref) {
        observer.observe(ref);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const icons = ['🚗', '💒', '🍾', '🍽️', '🎉'];

  return (
    <section className="mt-16 max-w-4xl mx-auto px-4">
      <div className="relative px-4 sm:px-8">
        {/* SVG con línea curva de fondo */}
        <svg 
          className="absolute left-1/2 top-0 transform -translate-x-1/2 opacity-30" 
          width="300" 
          height="100%" 
          style={{ minHeight: '100%' }}
          viewBox="0 0 300 1500"
          preserveAspectRatio="none"
        >
          <path
            d="M150,0 Q20,75 150,150 Q280,225 150,300 Q20,375 150,450 Q280,525 150,600 Q20,675 150,750 Q280,825 150,900 Q20,975 150,1050 Q280,1125 150,1200 Q20,1275 150,1350 Q280,1425 150,1500"
            stroke="#2e6417"
            strokeWidth="3"
            fill="none"
          />
        </svg>
        
        {/* SVG con línea curva animada que crece con el scroll */}
        <svg 
          className="absolute left-1/2 top-0 transform -translate-x-1/2 transition-all duration-700 ease-out" 
          width="300" 
          height="100%"
          viewBox="0 0 300 1500"
          preserveAspectRatio="none"
          style={{ 
            minHeight: '100%',
            clipPath: visibleItems.includes(weddingConfig.schedule.length - 1) 
              ? 'inset(0 0 0 0)' 
              : `inset(0 0 ${100 - (Math.max(...visibleItems, -1) + 1) / weddingConfig.schedule.length * 100}% 0)`
          }}
        >
          <path
            d="M150,0 Q20,75 150,150 Q280,225 150,300 Q20,375 150,450 Q280,525 150,600 Q20,675 150,750 Q280,825 150,900 Q20,975 150,1050 Q280,1125 150,1200 Q20,1275 150,1350 Q280,1425 150,1500"
            stroke="#2e6417"
            strokeWidth="3"
            fill="none"
          />
        </svg>

        {weddingConfig.schedule.map((event, index) => {
          const isLeft = index % 2 === 0;
          const isVisible = visibleItems.includes(index);

          return (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`relative mb-20 last:mb-0 flex items-center ${
                isLeft ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Contenido */}
              <div
                className={`w-[45%] sm:w-5/12 transition-all duration-700 relative ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : isLeft
                    ? 'opacity-0 -translate-x-10'
                    : 'opacity-0 translate-x-10'
                }`}
              >
                <div className={`text-${isLeft ? 'right' : 'left'} ${isLeft ? 'pr-8 sm:pr-16 md:pr-24 lg:pr-32' : 'pl-8 sm:pl-16 md:pl-24 lg:pl-32'}`}>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-canva-green mb-2 font-crimson">
                    {event.time}
                  </p>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-crimson text-canva-pink mb-3">
                    {event.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-canva-green leading-relaxed font-crimson">
                    {event.description}
                  </p>
                </div>
                
                {/* Línea punteada que conecta al círculo */}
                <div
                  className={`absolute top-1/2 ${
                    isLeft ? 'left-full ml-2 sm:ml-4' : 'right-full mr-2 sm:mr-4'
                  } w-8 sm:w-12 md:w-20 lg:w-28 border-t-2 border-dashed border-wedding-green-400 transition-all duration-700 ${
                    isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                  }`}
                  style={{ transformOrigin: isLeft ? 'left' : 'right' }}
                ></div>
              </div>

              {/* Punto central con icono */}
              <div className="w-[10%] sm:w-2/12 flex justify-center flex-shrink-0">
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-4 border-canva-green flex items-center justify-center shadow-lg z-10 transition-all duration-500 ${
                    isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                  }`}
                >
                  <span className="text-2xl sm:text-3xl">{icons[index]}</span>
                </div>
              </div>

              {/* Espacio vacío del otro lado */}
              <div className="w-[45%] sm:w-5/12"></div>
            </div>
          );
        })}
      </div>

      {/* Título ¿Vienes a celebrarlo con nosotros? */}
      <div className="text-center mt-20 mb-4 px-4">
        <h2 className="text-2xl sm:text-3xl font-script text-canva-green uppercase tracking-wider">
          ¿Vienes a celebrarlo con nosotros?
        </h2>
      </div>
    </section>
  );
};

export default TimelineSection;
