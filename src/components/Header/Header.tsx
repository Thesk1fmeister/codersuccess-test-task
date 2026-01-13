import React, { useState } from 'react';
import { Droplet, Phone, ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components';
import repairsIcon from '@/assets/icons/repairs.png';
import drainIcon from '@/assets/icons/drain.png';
import waterHeaterIcon from '@/assets/icons/water-heater.png';
import leaksIcon from '@/assets/icons/leaks.png';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    {
      icon: repairsIcon,
      title: 'Emergency Repairs',
      description: '24/7 Rapid Response',
      href: '/services/emergency-repairs',
    },
    {
      icon: drainIcon,
      title: 'Drain Cleaning',
      description: 'Unclog & Maintenance',
      href: '/services/drain-cleaning',
    },
    {
      icon: waterHeaterIcon,
      title: 'Water Heaters',
      description: 'Install & Repair',
      href: '/services/water-heaters',
    },
    {
      icon: leaksIcon,
      title: 'Leak Detection',
      description: '& More Services',
      href: '/services/leak-detection',
    },
  ];

  return (
    <header className="bg-primary-navy border-b border-white/10 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 bg-primary-blue rounded-full flex items-center justify-center">
            <Droplet className="text-white w-6 h-6 fill-white" />
          </div>
          <span className="text-white text-lg font-bold tracking-wide">
            PLUMBING <span className="text-neutral-gray font-normal">SERVICES</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="/" className="text-white uppercase text-sm font-medium hover:text-primary-blue transition-colors">
            Home
          </a>
          <a href="/about" className="text-neutral-gray uppercase text-sm font-medium hover:text-white transition-colors">
            About Us
          </a>
          
          {/* Services Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button 
              className="flex items-center gap-1 text-neutral-gray uppercase text-sm font-medium hover:text-white transition-colors"
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Dropdown Menu */}
            {isServicesOpen && (
              <div 
                className="absolute top-full left-0 pt-2 w-64"
              >
                <div className="bg-primary-navy-light border border-primary-blue/20 rounded-lg shadow-xl shadow-primary-blue/10 py-2">
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={service.href}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-primary-navy transition-colors group/item"
                    >
                      <div>
                        <div className="text-white text-sm font-medium group-hover/item:text-primary-blue transition-colors">
                          {service.title}
                        </div>
                        <div className="text-neutral-gray text-xs">
                          {service.description}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a href="/pricing" className="text-neutral-gray uppercase text-sm font-medium hover:text-white transition-colors">
            Pricing
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Desktop Actions - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-3 text-white">
              <Phone className="text-primary-blue w-5 h-5" />
              <div className="flex flex-col">
                <span className="text-xs text-neutral-gray">24/7 EMERGENCY CALL</span>
                <span className="text-base font-bold tracking-wide">123-456-7890</span>
              </div>
            </div>
            <Button variant="orange" className="font-bold text-xs tracking-wider">
              GET A QUOTE
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-primary-blue transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-primary-navy-light border-t border-white/10 mt-4">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            <a 
              href="/" 
              className="text-white uppercase text-sm font-medium hover:text-primary-blue transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="/about" 
              className="text-neutral-gray uppercase text-sm font-medium hover:text-white transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </a>
            
            {/* Mobile Services Dropdown */}
            <div>
              <button 
                className="flex items-center justify-between w-full text-neutral-gray uppercase text-sm font-medium hover:text-white transition-colors py-2"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={service.href}
                      className="flex items-center gap-3 py-2 hover:bg-primary-navy/50 rounded-lg px-3 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div>
                        <div className="text-white text-xs font-medium">
                          {service.title}
                        </div>
                        <div className="text-neutral-gray text-xs">
                          {service.description}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a 
              href="/pricing" 
              className="text-neutral-gray uppercase text-sm font-medium hover:text-white transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>

            {/* Mobile Contact */}
            <div className="flex items-center gap-3 text-white py-2 border-t border-white/10 mt-2 pt-4">
              <Phone className="text-primary-blue w-5 h-5" />
              <div className="flex flex-col">
                <span className="text-xs text-neutral-gray">24/7 EMERGENCY CALL</span>
                <a href="tel:123-456-7890" className="text-base font-bold tracking-wide">123-456-7890</a>
              </div>
            </div>

            <Button variant="orange" className="font-bold text-xs tracking-wider w-full">
              GET A QUOTE
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
