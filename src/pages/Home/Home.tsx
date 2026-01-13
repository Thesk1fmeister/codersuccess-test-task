import React from 'react';
import { Header, Hero, Services } from '@/components';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary-navy">
      <Header />
      <Hero />
      <Services />
    </div>
  );
};

export default Home;
