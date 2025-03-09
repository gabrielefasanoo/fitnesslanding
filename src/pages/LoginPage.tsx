import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-primary-900 to-primary-700 pt-20">
        <div className="container mx-auto px-4 h-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center min-h-[80vh]"
          >
            <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">
                  {isLogin ? 'Accedi al tuo account' : 'Crea un account'}
                </h1>
                <p className="text-gray-600 mt-2">
                  {isLogin ? 'Bentornato! Inserisci i tuoi dati per continuare' : 'Inizia il tuo percorso fitness oggi'}
                </p>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500"
                    placeholder="La tua email"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500"
                    placeholder="La tua password"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-accent-500 text-white py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors"
                >
                  {isLogin ? 'Accedi' : 'Registrati'}
                </motion.button>
              </form>

              <div className="mt-6 text-center">
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  {isLogin ? 'Non hai un account? Registrati' : 'Hai già un account? Accedi'}
                </button>
              </div>

              <div className="mt-8 border-t border-gray-200 pt-6">
                <p className="text-center text-sm text-gray-600">
                  Accedendo, accetti i nostri{' '}
                  <a href="#" className="text-accent-500 hover:text-accent-600">
                    Termini di Servizio
                  </a>{' '}
                  e la{' '}
                  <a href="#" className="text-accent-500 hover:text-accent-600">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
