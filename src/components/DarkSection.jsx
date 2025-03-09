import React from 'react';

const DarkSection = () => {
  return (
    <div className="w-full bg-gray-900 text-white py-20">
      <div className="max-w-[1240px] mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Fitness per tutti
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Dal principiante all'atleta esperto, i nostri programmi si adattano 
          alle tue esigenze. Scopri un approccio personalizzato al fitness che 
          ti aiuterà a raggiungere i tuoi obiettivi.
        </p>
      </div>
    </div>
  );
};

export default DarkSection;
