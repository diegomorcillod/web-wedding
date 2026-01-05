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
        {/* Línea vertical central */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-canva-green transform -translate-x-1/2 opacity-30"></div>
        
        {/* Línea animada que crece con el scroll */}
        <div 
          className="absolute left-1/2 top-0 w-0.5 bg-canva-green transform -translate-x-1/2 transition-all duration-700 ease-out"
          style={{ 
            height: visibleItems.includes(weddingConfig.schedule.length - 1) 
              ? '100%' 
              : `${(Math.max(...visibleItems, -1) + 1) / weddingConfig.schedule.length * 100}%`,
          }}
        ></div>

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
                <div className={`text-${isLeft ? 'right' : 'left'} ${isLeft ? 'pr-3 sm:pr-6 md:pr-10' : 'pl-3 sm:pl-6 md:pl-10'}`}>
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
                    isLeft ? 'right-0 mr-[-1.5rem] sm:mr-[-3rem] md:mr-[-5rem]' : 'left-0 ml-[-1.5rem] sm:ml-[-3rem] md:ml-[-5rem]'
                  } w-6 sm:w-12 md:w-20 border-t-2 border-dashed border-wedding-green-400 transition-all duration-700 ${
                    isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                  }`}
                  style={{ transformOrigin: isLeft ? 'right' : 'left' }}
                ></div>
              </div>

              {/* Punto central con icono */}
              <div className="w-[10%] sm:w-2/12 flex justify-center">
                <div
                  className={`w-12 h-12 rounded-full bg-white border-4 border-canva-green flex items-center justify-center shadow-lg z-10 transition-all duration-500 ${
                    isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                  }`}
                >
                  <span className="text-2xl">{icons[index]}</span>
                </div>
              </div>

              {/* Espacio vacío del otro lado */}
              <div className="w-[45%] sm:w-5/12"></div>
            </div>
          );
        })}
      </div>

      {/* Título ¿Vienes a celebrarlo con nosotros? */}
      <div className="text-center mt-20 mb-12">
        <h2 className="text-2xl sm:text-3xl font-script text-canva-green uppercase tracking-wider mb-4">
          ¿Vienes a celebrarlo con
        </h2>
        <h2 className="text-2xl sm:text-3xl font-script text-canva-green uppercase tracking-wider">
          nosotros?
        </h2>
      </div>
    </section>
  );
};

export default TimelineSection;
