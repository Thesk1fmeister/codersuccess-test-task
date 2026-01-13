import React from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="group bg-primary-navy/80 backdrop-blur-sm border border-primary-blue/10 rounded-lg p-6 transition-all hover:border-primary-blue/30 hover:shadow-xl hover:shadow-primary-blue/10 cursor-pointer text-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 flex items-center justify-center">
          <img 
            src={icon} 
            alt={title} 
            className="w-14 h-14 object-contain group-hover:scale-110 transition-transform"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-white text-lg font-bold group-hover:text-primary-blue-light transition-colors">
            {title}
          </h3>
          <p className="text-neutral-gray text-xs">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
