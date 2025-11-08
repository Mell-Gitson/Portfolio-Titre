"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedSection = ({ 
  children, 
  variants, 
  duration = 0.5, 
  delay = 0, 
  className = "", 
  id,
  threshold = 0.1,
  once = true 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: threshold,
  });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ 
        duration: duration, 
        delay: delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;