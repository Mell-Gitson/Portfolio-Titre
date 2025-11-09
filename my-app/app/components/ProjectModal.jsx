"use client";

import { motion } from "framer-motion";
import Comments from "./Comments";
import { SiGithub } from "react-icons/si";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={backdropVariants}
      onClick={onClose}
    >
      <motion.div
        className="bg-darkBg-800 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto border-2 border-cyan-500/40"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-red-500/20 p-1 rounded-full hover:bg-red-500/40"
        >
          ✕
        </button>

        {/* Image */}
        <div className="relative w-full h-64 rounded-lg overflow-hidden border border-cyan-500/30 mb-5">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Contenu */}
        <h3 className="text-2xl font-bold text-cyan-400 mb-2">{project.title}</h3>
        <p className="text-lightText-200 mb-4">{project.description}</p>

        {/* GitHub */}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-white hover:text-gray-900"
          >
            <SiGithub size={20} />
            Voir sur GitHub
          </a>
        )}

        {/* Commentaires */}
        <Comments projectId={project.id} />
      </motion.div>
    </motion.div>
  );
}