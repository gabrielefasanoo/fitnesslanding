import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo e Contatti */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">LOGO</h2>
            <p className="text-gray-300 mb-2">Via Example, 123</p>
            <p className="text-gray-300 mb-2">00100 Roma, IT</p>
            <p className="text-gray-300">info@example.com</p>
            <p className="text-gray-300">+39 06 1234567</p>
          </div>

          {/* Prima colonna links */}
          <div>
            <h3 className="font-bold mb-4">Azienda</h3>
            <ul className="text-gray-300">
              <li className="mb-2"><a href="#" className="hover:text-white">Chi Siamo</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Carriere</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Blog</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Partner</a></li>
            </ul>
          </div>

          {/* Seconda colonna links */}
          <div>
            <h3 className="font-bold mb-4">Risorse</h3>
            <ul className="text-gray-300">
              <li className="mb-2"><a href="#" className="hover:text-white">Supporto</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Guide</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">API</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Community</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold mb-4">Social</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-300"><BsFacebook size={24} /></a>
              <a href="#" className="hover:text-gray-300"><BsInstagram size={24} /></a>
              <a href="#" className="hover:text-gray-300"><BsTwitter size={24} /></a>
              <a href="#" className="hover:text-gray-300"><BsYoutube size={24} /></a>
            </div>
          </div>
        </div>

        {/* Disclaimer e Copyright */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Your Company. Tutti i diritti riservati.
            </p>
            <div className="flex gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white">Politica Privacy</a>
              <span>•</span>
              <a href="#" className="hover:text-white">Termini di Servizio</a>
              <span>•</span>
              <a href="#" className="hover:text-white">Impostazioni Cookie</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
