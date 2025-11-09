"use client";

import React from "react";
import Card from "./Card";

export function Projects({ id, title, description, image, index }) {
  // Mode affichage d’un seul projet (optionnel)
  if (id) {
    return (
      <Card
        projectId={String(id)}
        title={title}
        description={description}
        image={image || "/assets/fallback.png"}
        link="#"
        githubButton={false}
        reactButton={false}
      />
    );
  }

  // Liste de tes projets réels
  const projects = [
    {
      id: 1,
      title: "MC2",
      description:
        "Application de recherche de films et séries en React et Node.js.",
      image: "/assets/devbanière.png",
      link: "https://github.com/Mell-Gitson/MlCinema",
      demo: "https://devban.vercel.app",
    },
    {
      id: 2,
      title: "dock'uiz",
      description:
        "Mise en place d'un environnement Docker dans une application jeu de quizz.",
      image: "/assets/annexes-pprod.png",
      link: "https://github.com/Mell-Gitson/Micro-services",
      demo: null,
    },
    {
      id: 3,
      title: "Project Watch",
      description: "Suivi de projets en temps réel avec WebSockets.",
      image: "/assets/project-watch.png",
      link: "https://github.com/Mell-Gitson/E-commerce",
      demo: "https://project-watch.vercel.app",
    },
    {
      id: 4,
      title: "Drive'Manage",
      description: "Application interne de gestion pour auto-école.",
      image: "/assets/projet-spotify.png", // ⚠️ À remplacer par la bonne image si possible
      link: "https://github.com/Mell-Gitson/Drive-School-Manage",
      demo: "https://drive-manage-mellcanac.vercel.app", // ✅ URL logique (à créer si besoin)
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
            image={project.image || "/assets/fallback.png"}
            link={project.link}
            demo={project.demo}
            githubButton={true}
            reactButton={!!project.demo}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
