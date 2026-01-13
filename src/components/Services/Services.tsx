import React from 'react';
import { ServiceCard } from '@/components';
import repairsIcon from '@/assets/icons/repairs.png';
import drainIcon from '@/assets/icons/drain.png';
import waterHeaterIcon from '@/assets/icons/water-heater.png';
import leaksIcon from '@/assets/icons/leaks.png';

const Services: React.FC = () => {
  const services = [
    {
      icon: repairsIcon,
      title: 'Emergency Repairs',
      description: '24/7 Rapid Response',
    },
    {
      icon: drainIcon,
      title: 'Drain Cleaning',
      description: 'Unclog & Maintenance',
    },
    {
      icon: waterHeaterIcon,
      title: 'Water Heaters',
      description: 'Install & Repair',
    },
    {
      icon: leaksIcon,
      title: 'Leak Detection',
      description: '& More Services',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-primary-navy to-neutral-dark py-8 relative">
      {/* Optional decorative line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-blue/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
