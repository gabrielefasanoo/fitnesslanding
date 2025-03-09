import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Chi Siamo</h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
                alt="Il nostro team"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary-600">La Nostra Missione</h2>
              <p className="text-gray-600 leading-relaxed">
                Aiutiamo le persone a raggiungere i loro obiettivi di fitness attraverso 
                tecnologia innovativa e supporto personalizzato.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-3xl font-bold text-accent-500">5+</div>
                  <div className="text-gray-600">Anni di Esperienza</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-3xl font-bold text-accent-500">50k+</div>
                  <div className="text-gray-600">Clienti Soddisfatti</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
