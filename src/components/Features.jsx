import React from 'react';
import { BsGraphUp, BsClock, BsPeople } from 'react-icons/bs';

const Features = () => {
  const features = [
    {
      icon: <BsGraphUp size={40} />,
      title: "Monitoraggio degli Allenamenti in Tempo Reale",
      description: "Tieni traccia dei tuoi progressi e visualizza statistiche dettagliate del tuo allenamento."
    },
    {
      icon: <BsClock size={40} />,
      title: "Pianificazione Intelligente",
      description: "Programmi di allenamento personalizzati che si adattano al tuo livello e ai tuoi obiettivi."
    },
    {
      icon: <BsPeople size={40} />,
      title: "Comunità Attiva",
      description: "Connettiti con altri atleti, condividi i tuoi successi e trova motivazione nel gruppo."
    }
  ];

  return (
    <div className="w-full py-16 px-4">
      {/* Larghezza completa, padding verticale di 16 e padding orizzontale di 4 */}
      <div className="max-w-[1240px] mx-auto mb-16">
        {/* Larghezza massima di 1240px, margine orizzontale automatico (centrato), margine inferiore di 16 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Layout a griglia con 2 colonne, su dispositivi medi e superiori 4 colonne, gap di 8 */}
          <div className="flex flex-col items-center">
            {/* Layout flessibile in colonna, elementi centrati */}
            <span className="text-4xl font-bold text-primary-600">10k+</span>
            {/* Testo di dimensione 4xl, grassetto, colore primario */}
            <span className="text-gray-600">Utenti Attivi</span>
            {/* Testo di colore grigio */}
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-primary-600">95%</span>
            <span className="text-gray-600">Tasso di Successo</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-primary-600">4.9/5</span>
            <span className="text-gray-600">Rating App Store</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-primary-600">24/7</span>
            <span className="text-gray-600">Supporto Clienti</span>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center mb-16">
          {/* Testo centrato, margine inferiore di 16 */}
          <h2 className="text-4xl font-bold mb-4">Scopri le Potenzialità della Nostra App</h2>
          {/* Testo di dimensione 4xl, grassetto, margine inferiore di 4 */}
          <p className="text-gray-600 max-w-2xl mx-auto">
            {/* Testo di colore grigio, larghezza massima di 2xl, margine orizzontale automatico (centrato) */}
            Trasforma il tuo approccio al fitness con strumenti innovativi e funzionalità 
            pensate per massimizzare i tuoi risultati.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Layout a griglia, su dispositivi medi e superiori 3 colonne, gap di 8, margine inferiore di 12 */}
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg border hover:shadow-lg transition-shadow">
              {/* Padding di 6, bordi arrotondati, bordo, ombra al passaggio del mouse, transizione dell'ombra */}
              <div className="text-gray-800 mb-4">{feature.icon}</div>
              {/* Testo di colore grigio scuro, margine inferiore di 4 */}
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              {/* Testo di dimensione xl, grassetto, margine inferiore di 3 */}
              <p className="text-gray-600">{feature.description}</p>
              {/* Testo di colore grigio */}
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          {/* Layout flessibile, contenuto centrato, gap di 4 */}
          <button className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors">
            {/* Sfondo nero, testo bianco, padding orizzontale di 8, padding verticale di 3, bordi arrotondati, sfondo grigio scuro al passaggio del mouse, transizione dei colori */}
            Inizia
          </button>
          <button className="border border-black px-8 py-3 rounded hover:bg-black hover:text-white transition-colors">
            {/* Bordo nero, padding orizzontale di 8, padding verticale di 3, bordi arrotondati, sfondo nero e testo bianco al passaggio del mouse, transizione dei colori */}
            Scopri
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Features;
