import React, { useEffect, useRef, useState } from 'react';
import { weddingConfig } from '../config';

const TimelineSection: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [circlePaths, setCirclePaths] = useState<string>('');

  useEffect(() => {
    const updatePath = () => {
      if (circleRefs.current.every(ref => ref !== null)) {
        const containerRect = circleRefs.current[0]?.parentElement?.parentElement?.getBoundingClientRect();
        if (!containerRect) return;

        const points = circleRefs.current.map((ref) => {
          if (!ref) return null;
          const rect = ref.getBoundingClientRect();
          const x = rect.left - containerRect.left + rect.width / 2;
          const y = rect.top - containerRect.top + rect.height / 2;
          return { x, y };
        }).filter(Boolean) as { x: number; y: number }[];

        // Crear path con curvas suaves (quadratic bezier)
        let pathData = `M ${points[0].x} ${points[0].y}`;
        
        for (let i = 1; i < points.length; i++) {
          const prev = points[i - 1];
          const curr = points[i];
          
          // Punto de control para la curva - en el medio pero desplazado
          const midX = (prev.x + curr.x) / 2;
          const midY = (prev.y + curr.y) / 2;
          
          // Curvatura hacia el centro para evitar el texto
          const isGoingRight = curr.x > prev.x;
          const controlX = midX + (isGoingRight ? -80 : 80);
          
          pathData += ` Q ${controlX} ${midY}, ${curr.x} ${curr.y}`;
        }
        
        setCirclePaths(pathData);
      }
    };

    updatePath();
    window.addEventListener('resize', updatePath);
    
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
      window.removeEventListener('resize', updatePath);
    };
  }, []);

  const icons = ['🚗', '💒', '🍾', '🍽️', '🎉'];

  return (
    <section className="mt-16 max-w-4xl mx-auto px-4">
      <div className="relative px-4 sm:px-8">
        {/* SVG Línea en zigzag de fondo (opaca) */}
        {circlePaths && (
          <svg 
            className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30"
            style={{ minHeight: '100%', zIndex: -1 }}
          >
            <path
              d={circlePaths}
              stroke="#2e6417"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}

        {/* SVG Línea en zigzag animada que se va revelando */}
        {circlePaths && (
          <svg 
            className="absolute top-0 left-0 w-full h-full pointer-events-none transition-all duration-700"
            style={{ minHeight: '100%', zIndex: -1 }}
          >
            <path
              d={circlePaths}
              stroke="#2e6417"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="2000"
              strokeDashoffset={2000 - (Math.max(...visibleItems, -1) + 1) / weddingConfig.schedule.length * 2000}
            />
          </svg>
        )}

        {weddingConfig.schedule.map((event, index) => {
          const isLeft = index % 2 === 0; // Par = izquierda, Impar = derecha
          const isVisible = visibleItems.includes(index);

          return (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className="relative mb-16 last:mb-0 z-10"
            >
              {isLeft ? (
                // Layout IZQUIERDA: emoji + texto
                <div className="flex items-center justify-start">
                  {/* Círculo con emoji */}
                  <div
                    ref={(el) => (circleRefs.current[index] = el)}
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-4 border-canva-green flex items-center justify-center shadow-lg flex-shrink-0 transition-all duration-500 z-10 relative ${
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
                    ref={(el) => (circleRefs.current[index] = el)}
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-4 border-canva-green flex items-center justify-center shadow-lg flex-shrink-0 transition-all duration-500 z-10 relative ${
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
