"use client";

import React from "react";

export function Footer() {
    return (
        <footer className="bg-darkBg-900 border-t-2 border-neonCyan-500/30 text-lightText-200 text-sm py-6 px-4 text-center mt-10 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto">
                <p className="mb-2">
                    <span className="text-cyan-400 font-semibold">Logo social network</span> © 2025 CANAC Mell Corporation – Tous droits réservés
                </p>
                <div className="flex justify-center space-x-6 mt-4">
                    <a href="#" className="hover:text-cyan-400 transition-colors duration-300 hover:neon-text">
                        Mentions légales
                    </a>
                    <a href="#" className="hover:text-cyan-400 transition-colors duration-300 hover:neon-text">
                        Confidentialité
                    </a>
                    <a href="#" className="hover:text-cyan-400 transition-colors duration-300 hover:neon-text">
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
}