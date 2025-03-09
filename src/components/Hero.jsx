import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section aria-label="Hero Section" className="relative w-full min-h-screen bg-gradient-to-br from-primary-900 to-primary-700 text-white">
      {/* Sezione principale con sfondo gradiente e testo bianco */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3"
          alt="Attrezzatura da palestra professionale"
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
        {/* Immagine di sfondo che copre tutta la sezione */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
        {/* Sovrapposizione gradiente per migliorare la leggibilità del testo */}
      </div>
      <div className="relative max-w-[1240px] mx-auto min-h-screen flex items-center px-4 py-20 lg:py-32">
        {/* Contenitore principale centrato con padding */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Layout a griglia con due colonne su dispositivi medi e superiori */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-8"
          >
            {/* Animazione di entrata per il contenuto */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Raggiungi i tuoi obiettivi di fitness <span className="text-accent-400">facilmente</span>
            </h1>
            {/* Titolo principale con dimensioni variabili in base allo schermo */}
            <p className="text-gray-100 text-lg lg:text-xl max-w-2xl">
              Trasforma il tuo corpo e la tua mente con i nostri programmi personalizzati. 
              Inizia oggi il tuo viaggio verso una vita più sana e attiva.
            </p>
            {/* Paragrafo descrittivo con testo grigio chiaro */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* Contenitore per i pulsanti con layout flessibile */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-accent-600 transition-colors group relative overflow-hidden"
              >
                <span className="relative z-10">Inizia Ora - Prova Gratuita</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-accent-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                {/* Pulsante con animazioni di hover e tap */}
              </motion.button>
              <div className="text-sm text-gray-200 mt-2 flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                Inizia gratis, nessuna carta di credito richiesta
                {/* Testo informativo con icona */}
              </div>
            </div>
            
            {/* Social Proof */}
            <div className="mt-8 border-t border-white/10 pt-8">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <img 
                      key={i}
                      src={`https://randomuser.me/api/portraits/men/${i}.jpg`}
                      className="w-8 h-8 rounded-full border-2 border-white"
                      alt="User"
                    />
                  ))}
                  {/* Immagini degli utenti con bordo */}
                </div>
                <p className="text-sm text-gray-200">
                  +1000 persone si sono unite questo mese
                  {/* Testo di prova sociale */}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
