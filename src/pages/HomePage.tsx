import React from 'react';
import Benefits from '../components/Benefits';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Header from '../components/Navbar';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import BenefitsList from '../components/BenefitsList';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <BenefitsList />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;
