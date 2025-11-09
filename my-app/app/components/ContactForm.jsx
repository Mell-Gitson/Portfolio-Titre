"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import NeonButton from "./NeonButton";


const contactVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); 

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); 

    try {
      const response = await fetch("/api/send-email", {
        
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du message");
      }

      const result = await response.json();
      console.log(result.message); 

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Erreur dans ContactForm handleSubmit:", err);
      setError(err.message || "Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatedSection
      id="contact"
      variants={contactVariants}
      duration={0.6}
      className="p-6 bg-grey-200 rounded-xl shadow-lg max-w-2xl mx-auto mt-10"
    >
      <h2 className="text-2xl md:text-4xl font-bold text-cyan-400 mb-4 neon-text text-center">
        Contactez-moi
      </h2>

      {submitted ? (
        <p className="text-green-600 font-medium text-center">
          Merci pour votre message !
        </p>
      ) : error ? ( 
        <p className="text-red-600 font-medium text-center">Erreur: {error}</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-4 p-6 bg-grey-200 rounded-xl shadow-lg max-w-2xl mx-auto mt-10"
        >
          <input
            name="name"
            type="text"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />

          <input
            name="email"
            type="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Votre message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />

          <NeonButton className="mt-4 w-full item-center" onClick={handleSubmit}>Envoyer</NeonButton>
        </form>
      )}
    </AnimatedSection>
  );
}
