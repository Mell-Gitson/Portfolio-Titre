
"use client";

import React from "react";
import { motion } from "framer-motion";
import Comments from "./Comments"; 
import { SiGithub } from "react-icons/si"; 

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const handleClose = () => {
    onClose(); 
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 pt-20"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={backdropVariants}
      onClick={handleClose} 
    >
      
      <motion.div
        className="bg-darkBg-800 rounded-xl p-6 max-w-4xl w-full shadow-cyan-green-xl border-2 border-cyan-500/50 relative overflow-y-auto max-h-[80vh] mt-4"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        
        onClick={(e) => e.stopPropagation()}
      >
        
        <button
          onClick={handleClose} 
          className="absolute top-4 right-4 text-red-500 hover:text-red-300 font-bold text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-600/20 transition-all duration-300"
        >
          × 
        </button>
        
        {/* Image du projet */}
        <div className="mb-6">
          {project.imgSrc && (
            <img
              src={project.imgSrc}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg border-2 border-cyan-500/30"
            />
          )}
        </div>
        
        
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-cyan-400 mb-3">{project.title}</h3>
          <p className="text-lightText-200 leading-relaxed mb-4">
            {project.details}
          </p>
        </div>

        
        <div className="mb-6">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold rounded-lg hover:shadow-cyan-green hover:scale-105 transition-all duration-300 border border-gray-600"
          >
            <SiGithub className="w-5 h-5 mr-2" />
            Voir sur GitHub
          </a>
        </div>

        
        <div className="mt-8 pt-8 border-t border-cyan-500/30">
          <h4 className="text-xl font-semibold text-cyan-300 mb-4">Commentaires</h4>
          
          <Comments projectId={project.id} />
        </div>
      </motion.div>
    </motion.div>
  );
}