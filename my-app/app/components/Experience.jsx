"use client";

import React from "react";
import AnimatedSection from "./AnimatedSection";

const experienceVariants = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0 },
};
  
export function Experience() {
    return (
        <AnimatedSection variants={experienceVariants} duration={0.6}>
            <section className="p-8 bg-darkBg-800/50 backdrop-blur-sm rounded-2xl shadow-neon-green border-2 border-neonGreen-500/30">
                <h2 className="text-3xl font-bold text-neonGreen-400 mb-8 border-b-2 border-neonGreen-500/50 pb-3 text-center neon-text">
                    Mon parcours et Expérience 
                </h2>
                
                <div className="space-y-8">
                    {/* Expérience principale */}
                    <div className="relative pl-8 border-l-2 border-neonGreen-500/30">
                        <div className="absolute -left-2.5 top-0 w-5 h-5 bg-neonGreen-500 rounded-full animate-pulse"></div>
                        <div className="bg-darkBg-900/50 p-6 rounded-xl border border-neonGreen-500/20 hover:border-neonGreen-500/50 transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                                <h3 className="text-xl font-bold text-neonGreen-300">Web@cademy</h3>
                                <span className="text-neonGreen-400 text-sm bg-neonGreen-500/10 px-3 py-1 rounded-full inline-block mt-2 md:mt-0">
                                    2023 - 2025
                                </span>
                            </div>
                            <h4 className="text-lg font-semibold text-lightText-100 mb-3">Programmation, Intégration</h4>
                            <p className="text-lightText-200 leading-relaxed">
                                Formation intensive en développement web full-stack. Apprentissage des technologies 
                                modernes frontend et backend, ainsi que des bonnes pratiques de développement.
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-neonGreen-500/20 text-neonGreen-300 rounded-full text-sm">
                                    HTML/CSS
                                </span>
                                <span className="px-3 py-1 bg-neonGreen-500/20 text-neonGreen-300 rounded-full text-sm">
                                    JavaScript
                                </span>
                                <span className="px-3 py-1 bg-neonGreen-500/20 text-neonGreen-300 rounded-full text-sm">
                                    React
                                </span>
                                <span className="px-3 py-1 bg-neonGreen-500/20 text-neonGreen-300 rounded-full text-sm">
                                    Node.js
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Autres expériences */}
                    <div className="relative pl-8 border-l-2 border-neonGreen-500/30">
                        <div className="absolute -left-2.5 top-0 w-5 h-5 bg-neonGreen-500/50 rounded-full"></div>
                        <div className="bg-darkBg-900/30 p-6 rounded-xl border border-neonGreen-500/10">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                                <h3 className="text-xl font-bold text-neonGreen-300">Expérience Sportive</h3>
                                <span className="text-neonGreen-400 text-sm">
                                    12 ans
                                </span>
                            </div>
                            <h4 className="text-lg font-semibold text-lightText-100 mb-3">Rugby - Champion de France</h4>
                            <p className="text-lightText-200 leading-relaxed">
                                Carrière sportive de haut niveau en rugby. Multiples titres de Champion de France. 
                                Développement de qualités de leadership, travail d'équipe et mentalité gagnante.
                            </p>
                        </div>
                    </div>

                    {/* Soft Skills */}
                    <div className="mt-10">
                        <h3 className="text-2xl font-bold text-neonGreen-400 mb-6 text-center">Compétences Transversales</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-darkBg-900/40 p-4 rounded-lg border border-neonGreen-500/20 text-center">
                                <div className="text-2xl text-neonGreen-400 mb-2"></div>
                                <h4 className="font-semibold text-neonGreen-300 mb-1">Esprit d'Équipe</h4>
                                <p className="text-lightText-300 text-sm">Agilité et Adaptabilité</p>
                            </div>
                            <div className="bg-darkBg-900/40 p-4 rounded-lg border border-neonGreen-500/20 text-center">
                                <div className="text-2xl text-neonGreen-400 mb-2"></div>
                                <h4 className="font-semibold text-neonGreen-300 mb-1">Rigueur</h4>
                                <p className="text-lightText-300 text-sm">Communication efficace en contexte institutionnel</p>
                            </div>
                            <div className="bg-darkBg-900/40 p-4 rounded-lg border border-neonGreen-500/20 text-center">
                                <div className="text-2xl text-neonGreen-400 mb-2"></div>
                                <h4 className="font-semibold text-neonGreen-300 mb-1">Organisation</h4>
                                <p className="text-lightText-300 text-sm">Gestion de projet et Planification</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AnimatedSection>
    );
}