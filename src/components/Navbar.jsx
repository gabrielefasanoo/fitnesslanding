import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <nav className="w-full h-[80px] fixed top-0 left-0 z-50 bg-gradient-to-r from-primary-900/90 to-primary-800/90 backdrop-blur-sm">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        {/* Menu Desktop */}
        <ul className="hidden md:flex text-white">
          <li>
            <Link to="/" className="p-4 cursor-pointer hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/chi-siamo" className="p-4 cursor-pointer hover:text-gray-300">Chi Siamo</Link>
          </li>
          <li>
            <Link to="/blog" className="p-4 cursor-pointer hover:text-gray-300">Blog</Link>
          </li>
          <li>
            <Link to="/partner" className="p-4 cursor-pointer hover:text-gray-300">Partner</Link>
          </li>
        </ul>

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="text-white">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.5 14.5C7.32843 14.5 8 13.8284 8 13C8 12.1716 7.32843 11.5 6.5 11.5C5.67157 11.5 5 12.1716 5 13C5 13.8284 5.67157 14.5 6.5 14.5Z" fill="currentColor"/>
              <path d="M17.5 14.5C18.3284 14.5 19 13.8284 19 13C19 12.1716 18.3284 11.5 17.5 11.5C16.6716 11.5 16 12.1716 16 13C16 13.8284 16.6716 14.5 17.5 14.5Z" fill="currentColor"/>
              <path d="M8 13H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M3 13H5M19 13H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="text-2xl font-bold text-white">FitLife</span>
        </Link>

        {/* Pulsante Accedi */}
        <div className="hidden md:flex">
          <Link 
            to="/login"
            className="bg-accent-500 text-white px-6 py-2 rounded hover:bg-accent-600 transition-colors"
          >
            Accedi
          </Link>
        </div>

        {/* Menu Mobile Icon */}
        <div onClick={handleNav} className="md:hidden cursor-pointer text-white">
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Menu Mobile */}
        <div className={nav ? "fixed left-0 top-[80px] w-full bg-primary-900/95 text-white md:hidden" : "fixed left-[-100%]"}>
          <ul className="p-4">
            <li className="p-4 border-b border-gray-200">Inizio</li>
            <li className="p-4 border-b border-gray-200">Link Two</li>
            <li className="p-4 border-b border-gray-200">Allenamenti</li>
            <li className="p-4">
              <button className="w-full border border-black px-6 py-2 rounded hover:bg-black hover:text-white transition-colors">
                Accedi
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
