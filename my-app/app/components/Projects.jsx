"use client";

import React from "react";
import Card from "./Card"; 

export function Projects({ id, title, description, imgSrc, index }) { 
  
  if (id) {
    return (
      <Card
        id={id}
        title={title}
        description={description}
        imgSrc={imgSrc}
        index={index || 0}
      />
    );
  }

  
  const projects = [
    { id: 1, title: "Projet 1", description: "Description du projet 1.", imgSrc: "/assets/astro-meté.jpg" },
    { id: 2, title: "Projet 2", description: "Description du projet 2.", imgSrc: "/assets/devbanière.png" },
    { id: 3, title: "Projet 3", description: "Description du projet 3.", imgSrc: "/path-to-project3-image.jpg" },
    { id: 4, title: "Projet 4", description: "Description du projet 4.", imgSrc: "/path-to-project4-image.jpg" },
    ];

  return (
    <div className="p-6 bg-darkBg-800/30 backdrop-blur-sm rounded-2xl shadow-neon-green border-2 border-neonGreen-500/20">
      <h2 className="text-3xl font-bold text-neonGreen-400 mb-8 border-b-2 border-neonGreen-500/30 pb-3 text-center neon-text">
        Mes Projets
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
        {projects.map((project, index) => (
          <Card
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            imgSrc={project.imgSrc}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}