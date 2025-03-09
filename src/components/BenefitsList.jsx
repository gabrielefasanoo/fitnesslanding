import React from 'react';
import { BsLightning, BsBarChart, BsPeople } from 'react-icons/bs';

const BenefitsList = () => {
  const benefits = [
    {
      icon: <BsLightning size={24} />,
      title: "Semplice e intuitivo: inizia il tuo viaggio verso il benessere oggi stesso",
      description: "Un'interfaccia user-friendly che ti permette di iniziare subito il tuo percorso fitness.",
      link: "Inizia >"
    },
    {
      icon: <BsBarChart size={24} />,
      title: "Monitora i tuoi progressi con precisione",
      description: "Visualizza statistiche dettagliate e segui i tuoi miglioramenti nel tempo.",
      link: "Scopri >"
    },
    {
      icon: <BsPeople size={24} />,
      title: "Unisciti alla nostra community fitness",
      description: "Condividi i tuoi successi e trova motivazione nella nostra community di appassionati.",
      link: "Visualizza >"
    }
  ];

  return (
    <div className="w-full py-16 px-4"> {/* Larghezza completa, padding verticale di 16 e padding orizzontale di 4 */}
      <div className="max-w-[1240px] mx-auto"> {/* Larghezza massima di 1240px, margine orizzontale automatico per centrare */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12"> {/* Testo di dimensione 3xl, su dispositivi medi 4xl, grassetto, centrato, margine inferiore di 12 */}
          Scopri come massimizzare i tuoi risultati con la nostra app di fitness
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8"> {/* Layout a griglia, su dispositivi medi 3 colonne, gap di 8 */}
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4 p-6 rounded-lg hover:bg-gray-50 transition-colors"> {/* Layout flessibile, gap di 4, padding di 6, bordi arrotondati, cambia colore di sfondo al passaggio del mouse, transizione dei colori */}
              <div className="text-black mt-1"> {/* Testo nero, margine superiore di 1 */}
                {benefit.icon}
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">{benefit.title}</h3> {/* Grassetto, testo di dimensione xl, margine inferiore di 2 */}
                <p className="text-gray-600 mb-4">{benefit.description}</p> {/* Testo grigio 600, margine inferiore di 4 */}
                <a href="#" className="text-black font-semibold hover:underline"> {/* Testo nero, semi-grassetto, sottolineato al passaggio del mouse */}
                  {benefit.link}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsList;
