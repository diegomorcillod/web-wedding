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
        {/* SVG Línea en zigzag de fondo (opaca) */}
        <svg 
          className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30"
          style={{ minHeight: '100%' }}
        >
          <path
            d={weddingConfig.schedule.map((_, index) => {
              const isLeft = index % 2 === 0;
              const yPosition = index * 160; // Aproximadamente mb-16 en px
              const xPosition = isLeft ? '7%' : '93%'; // Posición izquierda o derecha
              return index === 0 
                ? `M ${xPosition} ${yPosition}` 
                : `L ${xPosition} ${yPosition}`;
            }).join(' ')}
            stroke="#2e6417"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* SVG Línea en zigzag animada que se va revelando */}
        <svg 
          className="absolute top-0 left-0 w-full h-full pointer-events-none transition-all duration-700"
          style={{ minHeight: '100%' }}
        >
          <path
            d={weddingConfig.schedule.map((_, index) => {
              const isLeft = index % 2 === 0;
              const yPosition = index * 160;
              const xPosition = isLeft ? '7%' : '93%';
              return index === 0 
                ? `M ${xPosition} ${yPosition}` 
                : `L ${xPosition} ${yPosition}`;
            }).join(' ')}
            stroke="#2e6417"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="2000"
            strokeDashoffset={2000 - (Math.max(...visibleItems, -1) + 1) / weddingConfig.schedule.length * 2000}
          />
        </svg>

        {weddingConfig.schedule.map((event, index) => {
          const isLeft = index % 2 === 0; // Par = izquierda, Impar = derecha
          const isVisible = visibleItems.includes(index);

          return (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className="relative mb-16 last:mb-0"
            >
              {isLeft ? (
                // Layout IZQUIERDA: emoji + texto
                <div className="flex items-center justify-start">
                  {/* Círculo con emoji */}
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-4 border-canva-green flex items-center justify-center shadow-lg flex-shrink-0 transition-all duration-500 ${
                      isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                    }`}
                  >
                    <span className="text-2xl sm:text-3xl">{icons[index]}</span>
                  </div>
                  
                  {/* Texto a la derecha del emoji */}
                  <div
                    className={`ml-4 sm:ml-6 transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                  >
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
                </div>
              ) : (
                // Layout DERECHA: texto + emoji
                <div className="flex items-center justify-end">
                  {/* Texto a la izquierda del emoji */}
                  <div
                    className={`mr-4 sm:mr-6 text-right transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                    }`}
                  >
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
                  
                  {/* Círculo con emoji */}
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-4 border-canva-green flex items-center justify-center shadow-lg flex-shrink-0 transition-all duration-500 ${
                      isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                    }`}
                  >
                    <span className="text-2xl sm:text-3xl">{icons[index]}</span>
                  </div>
                </div>
              )}
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
