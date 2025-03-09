import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PartnersPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20 bg-gray-50">
        <div className="max-w-[1240px] mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">I Nostri Partner</h1>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[1,2,3].map((_, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <img 
                  src={`https://via.placeholder.com/150`}
                  alt="Partner logo"
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Partner {index + 1}</h3>
                <p className="text-gray-600 mb-4">
                  Collaboriamo per offrirti i migliori servizi e prodotti per il fitness.
                </p>
                <button className="text-accent-500 font-medium hover:text-accent-600">
                  Scopri di più →
                </button>
              </div>
            ))}
          </div>

          <div className="bg-primary-900 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-center">Diventa Partner</h2>
            <p className="text-center mb-6">
              Unisciti a noi nella missione di promuovere uno stile di vita sano.
            </p>
            <div className="text-center">
              <button className="bg-accent-500 px-8 py-3 rounded-lg font-semibold hover:bg-accent-600">
                Contattaci
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PartnersPage;
