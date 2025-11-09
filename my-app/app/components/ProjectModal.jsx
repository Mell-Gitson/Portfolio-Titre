// app/components/ProjectModal.jsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaGithub, FaReact, FaTimes } from "react-icons/fa";
import Link from "next/link";

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const { title, description, image, link, demo } = project;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-darkBg-900 rounded-xl border-2 border-neonGreen-500/30 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white bg-black/50 rounded-full p-2 hover:bg-red-500 transition"
          aria-label="Fermer"
        >
          <FaTimes size={20} />
        </button>

        <div className="relative w-full h-64 md:h-80">
          <Image
            src={image || "/assets/fallback.png"}
            alt={title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        <div className="p-6 text-white">
          <h3 className="text-2xl font-bold text-neonGreen-400 mb-3">
            {title}
          </h3>
          <p className="text-gray-300 mb-6">{description}</p>

          <div className="flex flex-wrap gap-3">
            {link && (
              <Link
                href={link.trim()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-white hover:text-black transition"
              >
                <FaGithub size={20} />
                GitHub
              </Link>
            )}
            {demo && (
              <Link
                href={demo.trim()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-800 transition"
              >
                <FaReact size={24} className="animate-spin-slow" />
                Tester
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
