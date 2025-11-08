"use client";

import React from "react";
import AnimatedSection from "./AnimatedSection";

const homeVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };
  
  export function Home() {
    return (
      <AnimatedSection variants={homeVariants} duration={0.6}>
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white"> 
            <img src="/path-to-your-photo.jpg" alt="Votre Nom" className="w-48 h-48 rounded-full mb-4" />
            <h1 className="text-4xl font-bold">Votre Nom</h1>
            <p className="text-xl mt-2">Développeur Full Stack basé à [Votre Ville]</p>
            </section>
        </AnimatedSection>
    );
}