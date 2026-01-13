import React from 'react';
import { Wrench, Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components';
import { useNavigate } from 'react-router-dom';

const ComingSoon: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-navy via-primary-navy-light to-primary-navy flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(10,15,26,0.8)_100%)]"></div>
      
      {/* Water splash effect - left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-primary-blue/20 blur-3xl rounded-full"></div>
          <div className="absolute top-10 left-10 w-48 h-48 bg-primary-blue/10 blur-2xl rounded-full"></div>
        </div>
      </div>

      {/* Water splash effect - right */}
      <div className="absolute right-0 top-1/4 w-96 h-96">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-primary-blue/20 blur-3xl rounded-full"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary-blue/30 blur-2xl rounded-full"></div>
            <div className="relative bg-primary-navy-light/80 backdrop-blur-sm border-2 border-primary-blue/50 rounded-full p-8 shadow-xl shadow-primary-blue/20">
              <Wrench className="w-24 h-24 text-primary-blue animate-pulse" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
          Coming Soon
        </h1>

        {/* Blue accent line */}
        <div className="w-24 h-1 bg-primary-blue mx-auto mb-8"></div>

        {/* Description */}
        <p className="text-xl lg:text-2xl text-neutral-gray mb-4 font-light max-w-2xl mx-auto">
          We're Working Hard to Bring You This Page
        </p>
        
        <p className="text-base lg:text-lg text-neutral-gray/80 mb-12 max-w-xl mx-auto">
          This section is currently under construction. Check back soon for exciting updates!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="default" 
            size="lg" 
            className="font-bold text-sm tracking-wider"
            onClick={() => navigate('/')}
          >
            <Home className="w-5 h-5" />
            GO TO HOME
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="font-semibold text-sm"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-5 h-5" />
            GO BACK
          </Button>
        </div>

        {/* Additional Info */}
        <div className="mt-16 pt-8 border-t border-primary-blue/20">
          <p className="text-sm text-neutral-gray">
            Need immediate assistance? Call us at{' '}
            <a href="tel:123-456-7890" className="text-primary-blue hover:text-primary-blue-light font-semibold transition-colors">
              123-456-7890
            </a>
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-10 opacity-10">
        <Wrench className="w-32 h-32 text-primary-blue rotate-45" strokeWidth={1} />
      </div>
      <div className="absolute top-20 right-20 opacity-10">
        <Wrench className="w-24 h-24 text-primary-blue -rotate-12" strokeWidth={1} />
      </div>
    </div>
  );
};

export default ComingSoon;
