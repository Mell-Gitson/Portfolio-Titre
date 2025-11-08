export const neonVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    filter: "blur(10px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const neonSlideIn = {
  hidden: { 
    opacity: 0, 
    x: -100,
    filter: "blur(5px)"
  },
  visible: { 
    opacity: 1, 
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const neonSlideInRight = {
  hidden: { 
    opacity: 0, 
    x: 100,
    filter: "blur(5px)"
  },
  visible: { 
    opacity: 1, 
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const neonFadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 80,
    filter: "blur(8px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

export const neonScaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    filter: "blur(10px)"
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const neonPulse = {
  hidden: { 
    opacity: 0,
    scale: 0.9
  },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  pulse: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Variant pour les cartes avec effet néon
export const neonCardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    filter: "blur(5px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    y: -5,
    boxShadow: "0 0 20px hsl(120, 100%, 50%), 0 0 40px hsl(120, 100%, 50%)",
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

// Variant pour les sections avec délai
export const neonStaggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const neonStaggerItem = {
  hidden: { 
    opacity: 0, 
    y: 20,
    filter: "blur(3px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};