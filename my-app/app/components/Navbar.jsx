"use client";

import React, { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-black/30 backdrop-blur-md p-4 fixed w-full top-0 z-50 border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="text-cyan-400 font-bold text-xl neon-text">M Canac</div>

         {/* Menu  desktop  */}
        <ul className="hidden md:flex justify-center space-x-8 text-lightText-100 text-lg">
          <li>
            <a 
              href="#home" 
              className="hover:text-cyan-400 transition-all duration-300 hover:neon-text hover:scale-110 inline-block"
              onClick={closeMenu}
            >
              Accueil
            </a>
          </li>
          <li>
            <a 
              href="#mon-parcours" 
              className="hover:text-cyan-400 transition-all duration-300 hover:neon-text hover:scale-110 inline-block"
              onClick={closeMenu}
            >
              À Propos
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className="hover:text-cyan-400 transition-all duration-300 hover:neon-text hover:scale-110 inline-block"
              onClick={closeMenu}
            >
              Projets
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="hover:text-cyan-400 transition-all duration-300 hover:neon-text hover:scale-110 inline-block"
              onClick={closeMenu}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Bouton menu burger */}
        <button 
          className="md:hidden text-lightText-100 focus:outline-none z-50"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <div className="space-y-1">
            <span className={`block w-6 h-0.5 bg-cyan-400 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-cyan-400 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-cyan-400 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Menu mobile */}
      <div 
        className={`fixed top-0 left-0 w-full h-screen bg-darkBg-900/95 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-8 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ 
          overflowY: isMenuOpen ? 'auto' : 'hidden' 
        }}
      >
        <ul className="flex flex-col items-center space-y-8 text-xl">
          <li>
            <a 
              href="#home" 
              className="text-lightText-100 hover:text-cyan-400 transition-colors duration-300"
              onClick={closeMenu}
            >
              Accueil
            </a>
          </li>
          <li>
            <a 
              href="#mon-parcours" 
              className="text-lightText-100 hover:text-cyan-400 transition-colors duration-300"
              onClick={closeMenu}
            >
              À Propos
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className="text-lightText-100 hover:text-cyan-400 transition-colors duration-300"
              onClick={closeMenu}
            >
              Projets
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="text-lightText-100 hover:text-cyan-400 transition-colors duration-300"
              onClick={closeMenu}
            >
              Contact
            </a>
          </li>
        </ul>
        <button 
          className="absolute top-4 right-4 text-lightText-100 focus:outline-none"
          onClick={closeMenu}
          aria-label="Fermer le menu"
        >
          <span className="text-3xl">×</span>
        </button>
      </div>
    </nav>
  );
}