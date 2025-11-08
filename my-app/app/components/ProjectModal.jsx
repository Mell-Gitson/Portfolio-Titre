
"use client";

import React from "react";
import { motion } from "framer-motion";
import Comments from "./Comments";

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
        className="bg-darkBg-800 rounded-xl p-6 max-w-3xl w-full shadow-cyan-green-xl border-2 border-cyan-500/50 relative overflow-y-auto max-h-[80vh] mt-4"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={handleClose}
      >
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-sm bg-red-600/80 text-white px-2 py-1 rounded hover:bg-red-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30"
          >
            ✕
          </button>
        

        {/* Image du projet */}
        <div className="mb-6">
          {project.imgSrc && (
            <img
              src={project.imgSrc}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg border-2 border-cyan-500/30"
            />
          )}
        </div>

        {/* Titre et description */}
        <div className="mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-3">
            {project.title}
          </h3>
          <p className="text-lightText-200 leading-relaxed mb-4">
            {project.details}
          </p>
        </div>

        {/* Bouton GitHub */}
        <div className="mb-6">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold rounded-lg hover:shadow-cyan-green hover:scale-105 transition-all duration-300 border border-gray-600"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111 1.022-.254 1.022-.577v-2.871c-4.017-.875-4.758-3.825-4.758-3.825-.644-1.618-1.585-2.054-1.585-2.054-1.298-.882.093-.866.093-.866 1.383.094 2.088 1.413 2.088 1.413 1.206 2.087 3.17 1.485 3.96 1.095.127-.855.477-1.485.875-1.825-3.024-.346-6.144-1.535-6.144-6.72 0-1.535.546-2.795 1.454-3.775-.152-.376-.664-1.887.144-3.895 0 0 1.184-.376 3.875 1.454 1.127-.316 2.333-.477 3.524-.477 1.191 0 2.397.161 3.524.477 2.691-1.83 3.875-1.454 3.875-1.454.792 1.998.28 3.509.144 3.895.908.98 1.454 2.24 1.454 3.775 0 5.192-3.127 6.355-6.144 6.72.486.42 1.022 1.16 1.022 2.41v3.38c0 .323.423.688 1.022.577 4.782-1.585 8.207-6.083 8.207-11.387 0-6.627-5.373-12-12-12z" />
            </svg>
            Voir sur GitHub
          </a>
        </div>

        {/* Section Commentaires */}
        <div className="mt-8 pt-8 border-t border-cyan-500/30">
          <h4 className="text-xl font-semibold text-yellow-300 mb-4">
            Commentaires
          </h4>
          <Comments projectId={project.id} />
        </div>
      </motion.div>
    </motion.div>
  );
}
