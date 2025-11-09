"use client";

import React, { useState } from "react";
import AuthWidget from "./AuthWidget";
import NeonNavLink from "./NeonNavLink";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const menuItems = ["Accueil", "À Propos", "Projets", "Contact"];

  return (
    <nav className="w-full bg-black/30 backdrop-blur-md border-b border-white/10 p-4 transition-colors z-50 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-cyan-400 font-bold text-xl neon-glow">M Canac</div>

        {/* Auth Widget */}
        <AuthWidget />

        {/* Menu desktop */}
        <ul className="hidden md:flex justify-center space-x-4">
          {menuItems.map((item) => (
            <li key={item}>
              <NeonNavLink
                href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                onClick={closeMenu}
              >
                {item}
              </NeonNavLink>
            </li>
          ))}
        </ul>

        {/* Menu burger mobile */}
        <button
          className="md:hidden text-lightText-100 focus:outline-none z-50"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <div className="space-y-1">
            <span
              className={`block w-6 h-0.5 bg-cyan-400 transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-cyan-400 transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-cyan-400 transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-darkBg-900/95 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-6 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{
          overflowY: isMenuOpen ? "auto" : "hidden",
        }}
      >
        <ul className="flex flex-col items-center space-y-6 text-xl">
          {menuItems.map((item) => (
            <li key={item}>
              <NeonNavLink
                href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                onClick={closeMenu}
              >
                {item}
              </NeonNavLink>
            </li>
          ))}
        </ul>

        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-lightText-100 text-3xl focus:outline-none"
          onClick={closeMenu}
          aria-label="Fermer le menu"
        >
          ×
        </button>
      </div>

      {/* Neon glow style for logo */}
      <style jsx>{`
        .neon-glow {
          text-shadow:
            0 0 2px rgba(0, 255, 255, 0.73),
            0 0 5px #0ff,
            0 0 10px rgba(0, 255, 255, 0.58),
            0 0 20px rgba(0, 255, 255, 0.69),
            0 0 30px rgba(0, 255, 255, 0.76);
        }
      `}</style>
    </nav>
  );
}
