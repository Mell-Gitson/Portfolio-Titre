"use client";

import { useState, useEffect } from "react";
import { createSupabaseClient } from "../lib/supabaseClient";

export default function Comments({ projectId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const supabase = createSupabaseClient(); 
        const { data, error } = await supabase
          .from("comments")
          .select("*")
          .eq("project_id", projectId)
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Erreur Supabase :", error);
        } else {
          setComments(data || []);
        }
      } catch (err) {
        console.error("Erreur d'initialisation Supabase :", err.message);
      }
    };

    fetchComments();
  }, [projectId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim() || !newComment.trim()) return;

    try {
      const supabase = createSupabaseClient();
      const { error } = await supabase
        .from("commentaires")
        .insert([{ project_id: projectId, username, text: newComment }]);

      if (!error) {
        setComments((prev) => [
          { id: Date.now(), username, text: newComment, created_at: new Date().toISOString() },
          ...prev
        ]);
        setUsername("");
        setNewComment("");
      }
    } catch (err) {
      console.error("Erreur envoi commentaire :", err.message);
    }
  };

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

      <form onSubmit={handleSubmit} className="mt-3 space-y-2">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Pseudo"
          className="w-full p-2 rounded bg-black/30 text-white border border-cyan-500/30"
        />
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Votre commentaire..."
          rows="2"
          className="w-full p-2 rounded bg-black/30 text-white border border-cyan-500/30"
        />
        <button
          type="submit"
          className="w-full py-2 bg-cyan-600 text-black font-semibold rounded hover:bg-cyan-500"
        >
          Ajouter
        </button>
      </form>
    </div>
  );
}