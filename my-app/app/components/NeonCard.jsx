"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const NeonCard = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative bg-darkBg-900 p-6 rounded-xl shadow-neon-green border-2 border-neonGreen-500 animate-border-pulse" 
    >
      
      <div className="w-[400px] h-[600px] overflow-hidden rounded-xl relative"> 
        <Image
          src="./assets/prescard.png"
          alt="Carte néon"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-xl"
        />
      </div>
    </motion.div>
  );
};

export default NeonCard;