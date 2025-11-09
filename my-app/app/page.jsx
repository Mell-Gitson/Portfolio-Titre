"use client";

import { Navbar } from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import NeonCard from "./components/NeonCard";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import Card from "./components/Card";
import "./globals.css";

export default function Home() {
  const projectsData = [
    {
      id: "project-1",
      title: "Dashboard Analyse",
      description: "Tableau de bord analytique avec visualisations de données.",
      imgSrc: "/assets/devbanière.png",
      githubLink: "https://github.com/votre-compte/dashboard-analyse",
      details:
        "Création d'un tableau de bord interactif pour visualiser des données en temps réel. Utilisation de React, Chart.js et Node.js.",
    },
    {
      id: "project-2",
      title: "API REST Webservice",
      description: "Automatisation CI/CD avec Docker et Kubernetes.",
      imgSrc: "/asset/annexes-pprod.png",
      githubLink: "https://github.com/votre-compte/devops-pipeline",
      details:
        "Mise en place d'une chaîne d'intégration et de déploiement continue automatisée. Utilisation de Jenkins, Docker, Kubernetes et Terraform.",
    },
    {
      id: "project-3",
      title: "E-commerce Platform",
      description: "Plateforme de commerce électronique complète.",
      imgSrc: "/assets/project-watch.png",
      githubLink: "https://github.com/votre-compte/e-commerce-platform",
      details:
        "Développement d'une plateforme e-commerce avec panier, paiement et gestion des commandes. Stack : React, Redux, Node.js, MongoDB.",
    },
    {
      id: "project-4",
      title: "Système de Quiz",
      description: "Application interactive de quiz avec système de notation.",
      imgSrc: "/assets/projet-spotify.png",
      githubLink: "https://github.com/votre-compte/quiz-system",
      details:
        "Création d'un système de quiz interactif avec un système de score et de classement. Techno : React, Firebase, Tailwind CSS.",
    },
  ];

  return (
    <div className="min-h-screen bg-darkBg-900 text-white">
      <Navbar />

      
      <section className="min-h-[90vh] flex flex-col md:flex-row items-center p-6 md:p-12 pt-20">
        
        <div className="flex-1 max-w-2xl mx-auto text-center md:text-left mb-8 md:mb-0 md:mr-8">
          <h1 className="text-3xl md:text-6xl font-bold text-cyan-400 mb-4 neon-text">
            Bienvenue sur mon portfolio
          </h1>
          <p className="text-lg md:text-xl text-lightText-200 mb-6">
            Je suis Mell ancien rugbyman reconverti en tant que Développeur Full
            Stack passionné par l'innovation et la création digitale j'exerce
            également en tant qu'Apprenti Chef de Projet à la Haute Autorité de
            Santé
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-4 mb-6">
            <span className="px-3 py-1 md:px-4 md:py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-xs md:text-sm border border-cyan-500/30">
              Back-end
            </span>
            <span className="px-3 py-1 md:px-4 md:py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-xs md:text-sm border border-cyan-500/30">
              Front-end
            </span>
            <span className="px-3 py-1 md:px-4 md:py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-xs md:text-sm border border-cyan-500/30">
              DevOps
            </span>
          </div>
          <a
            href="#about"
            className="inline-block px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-darkBg-900 font-bold rounded-lg hover:shadow-cyan-green-lg transform hover:scale-105 transition-all duration-300 border-2 border-cyan-500 text-sm md:text-base"
          >
            Découvrir mon parcours
          </a>
        </div>

        <div className="hidden md:block">
          <NeonCard />
        </div>
      </section>

      <section id="mon-parcours" className="py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">M.C</h2>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 flex-shrink-0">
              <div className="bg-darkBg-800/50 backdrop-blur-sm p-6 rounded-xl border-2 border-cyan-500/30 shadow-cyan-green">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                  À Propos de Moi
                </h3>
                <p className="text-lightText-200 mb-6">
                  Ancien sportif de haut niveau en rugby pendant 17 ans,
                  plusieurs fois titré Champion de France, je mets en avant mon
                  esprit d'équipe, mon savoir-être et ma rigueur afin d’apporter
                  le meilleur de moi-même. Persévérant et à l’écoute, je suis
                  constamment en quête d'apprentissage.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-darkBg-900/50 p-4 rounded-lg">
                    <h4 className="text-cyan-300 font-semibold mb-2">
                      Qualités
                    </h4>
                    <ul className="text-lightText-200 space-y-1">
                      <li>• Esprit d'équipe</li>
                      <li>• Rigueur</li>
                      <li>• Persévérance</li>
                    </ul>
                  </div>

                  <div className="bg-darkBg-900/50 p-4 rounded-lg">
                    <h4 className="text-cyan-300 font-semibold mb-2">
                      Approche
                    </h4>
                    <ul className="text-lightText-200 space-y-1">
                      <li>• À l'écoute</li>
                      <li>• Curiosité</li>
                      <li>• Apprentissage continu</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 flex-shrink-0 relative">
              <div className="relative top-12">
                <div className="bg-darkBg-800/50 backdrop-blur-sm p-6 rounded-xl border-2 border-cyan-500/30 shadow-cyan-green">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                    Mon parcours et Expérience
                  </h3>

                  
                  <div className="mb-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-cyan-300 font-semibold">
                          Web@cademy
                        </h4>
                        <p className="text-lightText-200 text-sm">
                          Programmation, Intégration
                        </p>
                      </div>
                      <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs">
                        2023 - 2025
                      </span>
                    </div>
                    <p className="text-lightText-200 mt-2">
                      Formation intensive en développement web full-stack.
                      Apprentissage des technologies modernes frontend et
                      backend, ainsi que des bonnes pratiques de développement.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-cyan-300 font-semibold">
                          Expérience Sportive
                        </h4>
                        <p className="text-lightText-200 text-sm">
                          Rugby - Champion de France
                        </p>
                      </div>
                      <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs">
                        2000 - 2017
                      </span>
                    </div>
                    <p className="text-lightText-200 mt-2">
                      Carrière sportive de haut niveau en rugby. Multiples
                      titres de Champion de France. Développement de qualités de
                      leadership, travail d'équipe et mentalité gagnante.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="p-6 md:p-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4 border-b-2 border-cyan-500/30 pb-3 text-center neon-text">
            Mes Projets
          </h2>
          <p className="text-lightText-300 max-w-2xl mx-auto mb-6 text-sm md:text-base">
            Découvrez mes projets réalisés, couvrant diverses technologies et
            domaines.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 place-items-center">
          {projectsData.map((project, index) => (
            <Card
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              imgSrc={project.imgSrc}
              index={index}
              projectDetails={project} 
            />
          ))}
        </div>
      </section>

      
      <section id="skills" className="p-6 md:p-12">
        <Skills />
      </section>

      
      <section id="soft-skills" className="p-6 md:p-12">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-cyan-400 mb-4 neon-text">
            Soft Skills
          </h2>
          <p className="text-lightText-300 max-w-2xl mx-auto mb-6 md:mb-8 text-sm md:text-base">
            Au-delà des compétences techniques, voici les qualités qui font la
            différence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Leadership",
              desc: "Capacité à guider et inspirer les équipes",
              icon: "",
            },
            {
              title: "Communication",
              desc: "Expression claire et écoute active",
              icon: "",
            },
            {
              title: "Résolution de problèmes",
              desc: "Approche analytique et créative",
              icon: "",
            },
            {
              title: "Adaptabilité",
              desc: "Flexibilité face aux changements",
              icon: "",
            },
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-darkBg-800/50 backdrop-blur-sm p-4 md:p-6 rounded-xl border-2 border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-cyan-green"
            >
              <div className="text-3xl md:text-4xl mb-3 md:mb-4 text-center">
                {skill.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-cyan-300 mb-2 text-center">
                {skill.title}
              </h3>
              <p className="text-lightText-200 text-center text-xs md:text-sm">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="p-6 md:p-12">
        <div className="max-w-full md:max-w-4xl mx-auto">
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
