import React from 'react';
import { Droplet, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components';

const Header: React.FC = () => {
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

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="/" className="text-white text-sm font-medium hover:text-primary-blue transition-colors">
            Home
          </a>
          <a href="/about" className="text-neutral-gray text-sm font-medium hover:text-white transition-colors">
            About Us
          </a>
          <button className="flex items-center gap-1 text-neutral-gray text-sm font-medium hover:text-white transition-colors">
            Services
            <ChevronDown className="w-4 h-4" />
          </button>
          <a href="/pricing" className="text-neutral-gray text-sm font-medium hover:text-white transition-colors">
            Pricing
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3 text-white">
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
      </div>
    </header>
  );
};

export default Header;
