"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { SiPhp, SiReact, SiJavascript, SiLaravel, SiTailwindcss, SiNodedotjs, SiPython, SiDocker, SiGit, SiMysql, SiPostgresql, SiMongodb } from "react-icons/si";

const skills = [
  { name: "PHP", color: "from-green-500 to-emerald-600", icon: <SiPhp size={28} /> },
  { name: "REACT", color: "from-cyan-400 to-blue-500", icon: <SiReact size={24} /> },
  { name: "JAVASCRIPT", color: "from-yellow-400 to-yellow-600", icon: <SiJavascript size={24} /> },
  { name: "LARAVEL", color: "from-red-500 to-red-700", icon: <SiLaravel size={24} /> },
  { name: "TAILWIND", color: "from-sky-400 to-teal-500", icon: <SiTailwindcss size={24} /> },
  { name: "NODE.JS", color: "from-green-600 to-emerald-800", icon: <SiNodedotjs size={24} /> },
  { name: "PYTHON", color: "from-blue-500 to-blue-700", icon: <SiPython size={24} /> },
  { name: "DOCKER", color: "from-blue-400 to-cyan-500", icon: <SiDocker size={24} /> },
  { name: "GIT", color: "from-orange-500 to-red-600", icon: <SiGit size={24} /> },
  { name: "MYSQL", color: "from-blue-600 to-blue-800", icon: <SiMysql size={29} /> },
  { name: "POSTGRESQL", color: "from-blue-700 to-indigo-800", icon: <SiPostgresql size={24} /> },
  { name: "MONGODB", color: "from-green-600 to-emerald-700", icon: <SiMongodb size={24} /> }
];

const getBaseColorClass = (gradientClass) => {
  return gradientClass.split(' ')[0]; // 
};

const generateAnimationName = (index) => `skillPulse_${index}`;


const colorMap = {
  'from-green-500': '25, 195, 125',
  'from-cyan-400': '34, 211, 238',
  'from-yellow-400': '251, 191, 36',
  'from-red-500': '239, 68, 68',
  'from-sky-400': '56, 189, 248',
  'from-green-600': '22, 163, 74',
  'from-blue-500': '59, 130, 246',
  'from-blue-400': '96, 165, 250',
  'from-orange-500': '249, 115, 22',
  'from-blue-600': '37, 99, 235',
  'from-blue-700': '29, 78, 216',
  'from-green-700': '21, 128, 61',
};

const generateKeyframesCSS = (index, baseColorClass) => {
  const baseColorRGB = colorMap[baseColorClass] || '255, 255, 255'; 

  return `
    @keyframes ${generateAnimationName(index)} {
      0%, 150% {
        box-shadow: 0 0 5px rgba(${baseColorRGB}, 0.8), 0 0 10px rgba(${baseColorRGB}, 0.2);
      }
      50% {
        box-shadow: 0 0 10px rgba(${baseColorRGB}, 1), 0 0 20px rgba(${baseColorRGB}, 0.6);
      }
    }
  `;
};

export function Skills() {
  const keyframesCSS = skills.map((skill, index) => {
    const baseColorClass = getBaseColorClass(skill.color);
    return generateKeyframesCSS(index, baseColorClass);
  }).join('\n');

  return (
    <>
      
      <style>{keyframesCSS}</style>

      <section id="skills" className="p-6 bg-darkBg-800/50 backdrop-blur-sm rounded-2xl shadow-neon-green border-2 border-neonGreen-500/30">
        <h2 className="text-2xl font-bold text-center text-neonGreen-400 mb-4 neon-text">
          Compétences Techniques
        </h2>
        <p className="text-center text-lightText-300 mb-6 text-sm">
          Frontoffice / Backoffice - Expertise full-stack
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => {
            const baseColorClass = getBaseColorClass(skill.color);
            const animationName = generateAnimationName(index);
            
            const baseColorRGB = colorMap[baseColorClass] || '255, 255, 255';

            return (
              <div
                key={index}
                className={`group rounded-lg p-6 m-8 bg-gradient-to-br ${skill.color} shadow-lg shadow-black/50 hover:scale-110 transition-all duration-300 relative overflow-hidden border border-white/10`}
                style={{
                  animation: `${animationName} 2s infinite ease-in-out`,
                }}
              >
                
                <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-transparent opacity-20 blur-sm z-0"></div>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="text-white mb-2 transform group-hover:scale-110 transition-transform duration-100">
                    {skill.icon}
                  </div>
                  <h3 className="text-white font-medium text-xs">{skill.name}</h3>
                </div>

                
                <div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: `0 0 10px rgba(${baseColorRGB}, 1), 0 0 20px rgba(${baseColorRGB}, 0.8)`,
                    filter: 'blur(5px)'
                  }}
                ></div>
              </div>
            );
          })}
        </div>

        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-darkBg-900/50 p-4 rounded-lg border border-neonGreen-500/20 text-center">
            <div className="text-2xl font-bold text-neonGreen-400 mb-1">Travaux</div>
            <div className="text-lightText-200 text-sm">Collaboratif</div>
          </div>
          <div className="bg-darkBg-900/50 p-4 rounded-lg border border-neonGreen-500/20 text-center">
            <div className="text-2xl font-bold text-neonGreen-400 mb-1">Gestion</div>
            <div className="text-lightText-200 text-sm">de Projets</div>
          </div>
          <div className="bg-darkBg-900/50 p-4 rounded-lg border border-neonGreen-500/20 text-center">
            <div className="text-2xl font-bold text-neonGreen-400 mb-1">100%</div>
            <div className="text-lightText-200 text-sm">Passion garantie</div>
          </div>
        </div>
      </section>
    </>
  );
}