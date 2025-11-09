"use client";

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import NeonButton from "./NeonButton";


const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Comments({ projectId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const loadComments = async () => {
    if (!projectId) return;
    try {
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .eq("project_id", projectId)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setComments(data || []);
    } catch (err) {
      console.error("❌ Erreur chargement :", err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim() || !newComment.trim()) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from("comments")
        .insert([{ project_id: projectId, username, text: newComment }]);

      if (error) throw error;
      await loadComments();
      setUsername("");
      setNewComment("");
    } catch (err) {
      console.error("❌ Erreur envoi :", err.message);
      alert("Erreur lors de l'envoi.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadComments();
  }, [projectId]);

  return (
    <div className="mt-6">
      <h4 className="text-lg font-semibold text-cyan-300 mb-3">Commentaires</h4>
      <div className="space-y-2 max-h-32 overflow-y-auto mb-4 p-2 bg-black/20 rounded">
        {comments.length > 0 ? (
          comments.map((c) => (
            <div key={c.id} className="text-sm text-gray-300">
              <strong className="text-cyan-400">{c.username}</strong>: {c.text}
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic">Soyez le premier à commenter !</p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Pseudo"
          className="w-full p-2 rounded bg-black/30 text-white border border-cyan-500/30"
          disabled={loading}
        />
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Votre commentaire..."
          rows="2"
          className="w-full p-2 rounded bg-black/30 text-white border border-cyan-500/30"
          disabled={loading}
        />
        <NeonButton type="submit" disabled={loading}>
          {loading ? "Envoi..." : "Ajouter"}
        </NeonButton>
      </form>
    </div>
  );
}
