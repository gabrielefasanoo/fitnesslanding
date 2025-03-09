import React from 'react';
import { BsImage } from 'react-icons/bs';

const Benefits = () => {
  return (
    // Div contenitore con larghezza completa, padding sugli assi y e x, e sfondo grigio chiaro
    <div className="w-full py-16 px-4 bg-gray-50">
      {/* Contenitore interno con larghezza massima, centrato orizzontalmente, e layout a griglia per schermi medi e superiori */}
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-12">
        {/* Prima colonna con layout flexbox, centrato verticalmente */}
        <div className="flex flex-col justify-center">
          {/* Intestazione con diverse dimensioni del font per schermi piccoli e medi, font in grassetto, e margine inferiore */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Scopri i vantaggi della nostra app di fitness per il tuo benessere
          </h2>
          {/* Paragrafo con colore del testo grigio e margine inferiore */}
          <p className="text-gray-600 mb-6">
            La nostra app ti offre un'esperienza completa per il tuo percorso fitness. 
            Con strumenti intuitivi, programmi personalizzati e supporto costante, 
            raggiungerai i tuoi obiettivi più velocemente che mai.
          </p>
          {/* Pulsante con sfondo nero, testo bianco, padding, angoli arrotondati, larghezza adattabile, effetto hover, e transizione */}
          <button className="bg-black text-white px-6 py-3 rounded w-fit hover:bg-gray-800 transition-colors">
            Scopri di più
          </button>
        </div>
        {/* Seconda colonna con layout flexbox, centrato sia verticalmente che orizzontalmente */}
        <div className="flex items-center justify-center">
          {/* Contenitore dell'immagine con larghezza completa, altezza fissa, overflow nascosto, angoli arrotondati, e ombra */}
          <div className="w-full h-[400px] overflow-hidden rounded-lg shadow-xl">
            {/* Immagine con larghezza e altezza complete, adattamento dell'oggetto cover, effetto hover, e transizione */}
            <img 
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3"
              alt="Persona che si allena in palestra"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
