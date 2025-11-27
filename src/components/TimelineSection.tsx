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
    <section className="mt-16 max-w-2xl mx-auto">
      <div className="relative px-8">
        {/* Línea vertical central */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-wedding-green-600 transform -translate-x-1/2 opacity-30"></div>
        
        {/* Línea animada que crece con el scroll */}
        <div 
          className="absolute left-1/2 top-0 w-0.5 bg-wedding-green-600 transform -translate-x-1/2 transition-all duration-700 ease-out"
          style={{ 
            height: `${(visibleItems.length / weddingConfig.schedule.length) * 100}%`,
          }}
        ></div>

        {weddingConfig.schedule.map((event, index) => {
          const isLeft = index % 2 === 0;
          const isVisible = visibleItems.includes(index);

          return (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`relative mb-16 last:mb-0 flex items-center ${
                isLeft ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Contenido */}
              <div
                className={`w-5/12 transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : isLeft
                    ? 'opacity-0 -translate-x-10'
                    : 'opacity-0 translate-x-10'
                }`}
              >
                <div className={`text-${isLeft ? 'right' : 'left'} pr-${isLeft ? '4' : '0'} pl-${isLeft ? '0' : '4'}`}>
                  <p className="text-lg font-bold text-wedding-green-700 mb-1">
                    {event.time}
                  </p>
                  <h3 className="text-xl font-display text-wedding-pink-600 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>

              {/* Punto central con icono */}
              <div className="w-2/12 flex justify-center">
                <div
                  className={`w-12 h-12 rounded-full bg-white border-4 border-wedding-green-600 flex items-center justify-center shadow-lg z-10 transition-all duration-500 ${
                    isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                  }`}
                >
                  <span className="text-2xl">{icons[index]}</span>
                </div>
              </div>

              {/* Espacio vacío del otro lado */}
              <div className="w-5/12"></div>

              {/* Línea punteada que conecta */}
              <div
                className={`absolute top-1/2 ${
                  isLeft ? 'left-1/2 ml-6' : 'right-1/2 mr-6'
                } w-8 border-t-2 border-dashed border-wedding-green-400 transition-all duration-700 ${
                  isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                }`}
                style={{ transformOrigin: isLeft ? 'left' : 'right' }}
              ></div>
            </div>
          );
        })}
      </div>

      {/* Mensaje final */}
      <div className="text-center mt-12 animate-fade-in">
        <p className="text-2xl sm:text-3xl font-display text-wedding-green-700 mb-2">
          Hasta que el cuerpo aguante
        </p>
        <p className="text-lg text-gray-600 italic">
          ¡Que el ritmo no pare!
        </p>
      </div>
    </section>
  );
};

export default TimelineSection;
