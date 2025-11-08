"use client";

import { useEffect, useState } from "react";

export default function Comments({ projectId }) {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    const fetchComments = async () => {
      const res = await fetch(`/api/comments?project_id=${projectId}`);
      if (res.ok) {
        const data = await res.json();
        setComments(data);
      }
    };

    fetchComments();
  }, [projectId]);

    
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !comment) return;

    setLoading(true);
    const res = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        project_id: projectId,
        name,
        comment,
      }),
    });

    if (res.ok) {
      const newComment = await res.json();
      setComments([newComment, ...comments]);
      setName("");
      setComment("");
    }

    setLoading(false);
  };

  return (
    <div className="bg-black/40 p-4 rounded-lg mt-4">
      <h3 className="text-white font-semibold mb-2">Commentaires</h3>

      <form onSubmit={handleSubmit} className="space-y-2 mb-4">
        <input
          type="text"
          placeholder="Votre nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded text-black"
        />
        <textarea
          placeholder="Votre commentaire"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-2 rounded text-black"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:scale-105 transition-transform px-4 py-2 rounded text-white font-semibold"
        >
          {loading ? "Envoi..." : "Envoyer"}
        </button>
      </form>

      <div className="space-y-2 max-h-60 overflow-y-auto">
        {comments.length > 0 ? (
          comments.map((c, index) => (
            <div
              key={index}
              className="bg-white/10 p-2 rounded text-white border border-white/20"
            >
              <strong>{c.name}</strong> : {c.comment}
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-300">Aucun commentaire pour le moment.</p>
        )}
      </div>
    </div>
  );
}
