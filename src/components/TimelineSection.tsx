import React from 'react';
import { weddingConfig } from '../config';

const TimelineSection: React.FC = () => {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-serif text-wedding-green-700 mb-8 text-center">
        Programa del día
      </h2>
      
      <div className="space-y-6">
        {weddingConfig.schedule.map((event, index) => (
          <div 
            key={index}
            className="border-l-2 border-wedding-pink-500 pl-6 py-2"
          >
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-2xl font-bold text-wedding-pink-600">
                {event.time}
              </span>
              <h3 className="text-xl font-serif text-wedding-green-700">
                {event.title}
              </h3>
            </div>
            <p className="text-gray-600">
              {event.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
