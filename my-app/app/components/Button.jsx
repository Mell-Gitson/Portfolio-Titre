"use client"; 

import React from "react";

export default function Button({ children, onClick, className = "", variant = "primary", size = "md", ...props }) {
  const baseClasses = "font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-neonGreen-500 focus:ring-offset-2 focus:ring-offset-darkBg-900";
  
  const variants = {
    primary: "bg-neonGreen-700 text-darkBg-900 hover:bg-neonGreen-600 shadow-neon-green hover:shadow-neon-green-lg border-2 border-neonGreen-500",
    secondary: "bg-transparent text-neonGreen-400 border-2 border-neonGreen-500 hover:bg-neonGreen-500/20 hover:shadow-neon-green",
    ghost: "bg-transparent text-neonGreen-400 hover:bg-neonGreen-500/10 hover:text-neonGreen-300",
    outline: "bg-transparent text-neonGreen-400 border border-neonGreen-500 hover:bg-neonGreen-500 hover:text-darkBg-900 hover:shadow-neon-green"
  };
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  const combinedClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <button 
      className={combinedClasses} 
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}