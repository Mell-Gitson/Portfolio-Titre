"use client";

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

export default function Comments({ projectId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  
  const getSupabaseClient = () => {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      throw new Error("Supabase env vars missing");
    }
    return createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );
  };

  const loadComments = async () => {
    try {
      const supabase = getSupabaseClient();
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .eq("project_id", projectId)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setComments(data || []);
    } catch (err) {
      console.error("GET erreur :", err.message);
    }
  };

  const postComment = async (e) => {
    e.preventDefault();
    if (!username.trim() || !newComment.trim()) return;

    setLoading(true);
    try {
      const supabase = getSupabaseClient();
      const { error } = await supabase
        .from("comments")
        .insert([{ project_id: projectId, username, text: newComment }]);

      if (error) throw error;
      await loadComments(); 
      setUsername("");
      setNewComment("");
    } catch (err) {
      console.error("POST erreur :", err.message);
      alert("Erreur lors de l'envoi.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (projectId) loadComments();
  }, [projectId]);

  return (
    <div className="space-y-4">
      <div className="space-y-2 max-h-40 overflow-y-auto p-2 bg-black/10 rounded">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="text-sm text-gray-300 p-1 border-b border-gray-700">
              <strong className="text-cyan-400">{comment.username}</strong>: {comment.text}
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic">Soyez le premier à commenter !</p>
        )}
      </div>

      <form onSubmit={postComment} className="mt-3 space-y-2">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Nom"
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
        <button
          type="submit"
          className="w-full py-2 bg-cyan-600 text-black font-semibold rounded hover:bg-cyan-500 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Envoi..." : "Ajouter"}
        </button>
      </form>
    </div>
  );
}