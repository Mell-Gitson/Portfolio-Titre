"use client";

import { useState, useEffect, useRef } from "react";
import { supabase } from "../lib/supabaseClient";
import NeonButton from "./NeonButton";

export default function AuthWidget() {
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
    };
    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => listener?.subscription.unsubscribe();
  }, []);

  // Ferme le dropdown si clic à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignUp = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) alert(error.message);
    else setIsDropdownOpen(false);
    setLoading(false);
  };

  const handleSignIn = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert(error.message);
    else setIsDropdownOpen(false);
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  if (user) {
    return (
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-full bg-cyan-400 flex items-center justify-center text-black font-bold cursor-pointer">
          {user.email[0].toUpperCase()}
        </div>
        <NeonButton onClick={handleLogout}>Logout</NeonButton>
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <NeonButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        Sign In / Sign Up
      </NeonButton>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-darkBg-900 p-4 rounded-xl shadow-neon-cyan border-2 border-cyan-400 z-50">
          <h2 className="text-cyan-400 font-bold text-lg mb-2 text-center">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-2 px-3 py-2 rounded bg-black/20 border border-cyan-500 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 px-3 py-2 rounded bg-black/20 border border-cyan-500 text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <NeonButton
            onClick={isSignUp ? handleSignUp : handleSignIn}
            className="w-full mb-2"
            disabled={loading}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </NeonButton>

          <button
            className="text-cyan-400 underline text-sm hover:text-cyan-300 w-full"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Already have an account?" : "Create account?"}
          </button>
        </div>
      )}
    </div>
  );
}
