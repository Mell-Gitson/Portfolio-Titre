"use client";

import React from "react";
import AnimatedSection from "./AnimatedSection";

const aboutVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
};

export function AboutMe() {
    return (
        <AnimatedSection variants={aboutVariants} duration={0.6}>
            <section id="about" className="p-8 bg-darkBg-800/50 backdrop-blur-sm rounded-2xl shadow-neon-green border-2 border-neonGreen-500/30">
                <h2 className="text-3xl font-bold text-neonGreen-400 mb-6 border-b-2 border-neonGreen-500/50 pb-3 neon-text">
                    À Propos de Moi
                </h2>
                <div className="prose prose-invert max-w-none">
                    <p className="text-lightText-200 text-lg leading-relaxed mb-6">
                        - Participer activement au cycle de développement logiciel, de la conception à la livraison ;
                        - Développer mes compétences en développement full stack (frontend et backend) ;
                        - Apprendre à collaborer efficacement avec des parties prenantes non techniques (chefs de
                        projet, métiers, utilisateurs) ;
                        - Comprendre les spécificités du développement dans un contexte
                    </p>
                    <p className="text-lightText-200 text-lg leading-relaxed">
                        Persévérant et à l'écoute, je suis constamment en quête d'apprentissage.
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-darkBg-900/50 p-6 rounded-xl border border-neonGreen-500/20">
                        <h3 className="text-xl font-semibold text-neonGreen-300 mb-3">Qualités</h3>
                        <ul className="text-lightText-200 space-y-2">
                            <li className="flex items-center">
                                <span className="text-neonGreen-500 mr-2">•</span>
                                Esprit d'équipe
                            </li>
                            <li className="flex items-center">
                                <span className="text-neonGreen-500 mr-2">•</span>
                                Rigueur
                            </li>
                            <li className="flex items-center">
                                <span className="text-neonGreen-500 mr-2">•</span>
                                Persévérance
                            </li>
                        </ul>
                    </div>

                    <div className="bg-darkBg-900/50 p-6 rounded-xl border border-neonGreen-500/20">
                        <h3 className="text-xl font-semibold text-neonGreen-300 mb-3">Approche</h3>
                        <ul className="text-lightText-200 space-y-2">
                            <li className="flex items-center">
                                <span className="text-neonGreen-500 mr-2">•</span>
                                À l'écoute
                            </li>
                            <li className="flex items-center">
                                <span className="text-neonGreen-500 mr-2">•</span>
                                Curiosité
                            </li>
                            <li className="flex items-center">
                                <span className="text-neonGreen-500 mr-2">•</span>
                                Apprentissage continu
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </AnimatedSection>
    );
}