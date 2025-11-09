"use client";

import React from "react";
import Card from "./Card";

export function Projects({ id, title, description, image, index }) {
  
  if (id) {
    return (
      <Card
        projectId={String(id)} 
        title={title}
        description={description}
        image={image} 
        link="#"
        githubButton={false}
        reactButton={false}
      />
    );
  }

  
  const projects = [
    {
      id: 1,
      title: "DevBan",
      description: "Application de gestion bancaire en React et Node.js.",
      image: "/assets/devbanière.png",
      link: "https://github.com/tonuser/devban",
      demo: "https://devban.vercel.app",
    },
    {
      id: 2,
      title: "Annexes PProd",
      description: "Outil interne pour la production pharmaceutique.",
      image: "/assets/annexes-pprod.png",
      link: "https://github.com/tonuser/annexes-pprod",
      demo: null,
    },
    {
      id: 3,
      title: "Project Watch",
      description: "Suivi de projets en temps réel avec WebSockets.",
      image: "/assets/project-watch.png",
      link: "https://github.com/tonuser/project-watch",
      demo: "https://project-watch.vercel.app",
    },
    {
      id: 4,
      title: "Projet Spotify",
      description: "Clone de l'interface Spotify avec API Spotify Web.",
      image: "/assets/projet-spotify.png",
      link: "https://github.com/tonuser/spotify-clone",
      demo: "https://spotify-clone-mellcanac.vercel.app",
    },
  ];

  return (
    <div className="p-6 bg-darkBg-800/30 backdrop-blur-sm rounded-2xl shadow-neon-green border-2 border-neonGreen-500/20">
      <h2 className="text-3xl font-bold text-neonGreen-400 mb-8 border-b-2 border-neonGreen-500/30 pb-3 text-center neon-text">
        Mes Projets
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
        {projects.map((project) => (
          <Card
            key={project.id}
            projectId={String(project.id)} 
            title={project.title}
            description={project.description}
            image={project.image} 
            link={project.link}
            demo={project.demo}
            githubButton={true}
            reactButton={!!project.demo}
          />
        ))}
      </div>
    </div>
  );
}