import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components';
import backgroundImage from '@/assets/images/background.png';
import plumberImage from '@/assets/images/plumber.png';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-navy via-primary-navy-light to-primary-navy min-h-[600px] overflow-hidden">
      {/* Background image with blur and opacity */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0 bg-cover bg-center blur-sm"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        ></div>
      </div>
      
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(10,15,26,0.8)_100%)]"></div>
      
      {/* Water splash effect - left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-primary-blue/20 blur-3xl rounded-full"></div>
          <div className="absolute top-10 left-10 w-48 h-48 bg-primary-blue/10 blur-2xl rounded-full"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 flex items-center justify-between gap-12">
        {/* Left content */}
        <div className="flex-1 max-w-2xl">
          <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
            Reliable Plumbing<br />Services
          </h1>
          
          {/* Blue accent line */}
          <div className='flex gap-2 items-center mb-4'>
            <div className="w-1 h-8 bg-primary-blue"></div>
            <p className="text-2xl text-neutral-gray font-light">
              Your Trusted Local Plumber
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button variant="default" size="lg" className="font-bold text-sm tracking-wider">
              REQUEST SERVICE
            </Button>
            <Button variant="outline" size="lg" className="font-semibold text-sm">
              <Phone className="w-4 h-4" />
              CALL NOW
              <span className="font-bold ml-2">123-456-7890</span>
            </Button>
          </div>
        </div>

        {/* Right - Plumber image */}
        <div className="hidden lg:block flex-1 relative">
          <div className="relative w-full h-[500px]">
            <div className="absolute right-0 bottom-[-64px] w-full h-full flex items-center justify-center">
              <img 
                src={plumberImage} 
                alt="Professional Plumber" 
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative pipe/water elements could go here */}
    </section>
  );
};

export default Hero;
