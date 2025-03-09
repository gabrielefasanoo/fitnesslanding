import React from 'react';
import { BsPersonCircle, BsStar, BsStarFill } from 'react-icons/bs';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marco Rossi",
      role: "Trainer, Wellness Center",
      comment: "Un'app straordinaria che ha rivoluzionato il modo in cui gestisco i miei clienti. La facilità d'uso e le funzionalità avanzate la rendono indispensabile.",
      stars: 5
    },
    {
      name: "Laura Bianchi",
      role: "Personal Trainer",
      comment: "Finalmente uno strumento completo che mi permette di seguire i progressi dei miei clienti in tempo reale. Assolutamente consigliato!",
      stars: 5
    }
  ];

  const renderStars = (count) => {
    return [...Array(5)].map((_, index) => (
      index < count ? 
        <BsStarFill key={index} className="text-yellow-400" /> : 
        <BsStar key={index} className="text-yellow-400" />
    ));
  };

  return (
    <div className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Testimonianze Clienti
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <BsPersonCircle size={48} className="text-gray-400 mr-4" />
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {renderStars(testimonial.stars)}
              </div>
              <p className="italic text-gray-700">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
