import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

const Comments = ({ projectId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      setError(null);
      console.log(
        "Tentative de chargement des commentaires pour le projet:",
        projectId
      );
      try {
        const { data, error: fetchError } = await supabase
          .from("comments")
          .select("*")
          .eq("project_id", projectId)
          .order("created_at", { ascending: false });

        if (fetchError) {
          console.error("Erreur Supabase lors du chargement:", fetchError);
          throw fetchError;
        }

        console.log("Données récupérées:", data);
        setComments(data || []);
      } catch (err) {
        setError(err.message || "Impossible de charger les commentaires.");
      } finally {
        setLoading(false);
      }
    };

    if (projectId) {
      fetchComments();
    } else {
      console.warn("projectId non fourni à Comments.jsx");
      setLoading(false);
    }
  }, [projectId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim() || !username.trim()) {
      setError("Le commentaire et le nom d'utilisateur sont requis.");
      return;
    }

    setError(null);
    console.log(
      "Tentative d'ajout d'un commentaire pour le projet:",
      projectId
    );
    try {
      const { data, error: insertError } = await supabase
        .from("comments")
        .insert([
          {
            project_id: projectId,
            username: username,
            text: newComment,
          },
        ])
        .select();

      if (insertError) {
        console.error("Erreur Supabase lors de l'insertion:", insertError);
      }

      if (!data || !Array.isArray(data) || data.length === 0) {
        console.error(
          "Erreur: La réponse de Supabase pour l'insertion est vide ou incorrecte:",
          data
        );
        setError(
          "Une erreur est survenue lors de l'ajout du commentaire (réponse inattendue)."
        );
        return;
      }

      console.log("Commentaire ajouté avec succès:", data);

      setComments((prev) => [
        {
          id: data[0].id,
          project_id: projectId,
          username: username,
          text: newComment,
          created_at: data[0].created_at || new Date().toISOString(),
        },
        ...prev,
      ]);

      setNewComment("");
      setUsername("");
    } catch (err) {
      console.error("Erreur lors de l'ajout du commentaire:", err);

      setError(err.message || "Impossible d'ajouter le commentaire.");
    }
  };

  if (loading)
    return <p className="text-cyan-300">Chargement des commentaires...</p>;
  if (error) return <p className="text-red-500">Erreur: {error}</p>;

  return (
    <div className="mt-4">
      <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
        {comments.length === 0 ? (
          <p className="text-lightText-200 text-sm">
            Aucun commentaire pour le moment.
          </p>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-darkBg-900/30 p-3 rounded border border-cyan-500/20"
            >
              <div className="flex justify-between items-start">
                <span className="font-medium text-cyan-400">
                  {comment.username}
                </span>
                <span className="text-xs text-lightText-300">
                  {new Date(comment.created_at).toLocaleString()}
                </span>
              </div>
              <p className="text-lightText-200 mt-1">{comment.text}</p>
            </div>
          ))
        )}
      </div>

      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Votre nom"
          className="w-full p-2 bg-darkBg-800 border border-cyan-500/30 rounded text-lightText-100 placeholder-lightText-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          required
        />
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Ajouter un commentaire..."
          rows="2"
          className="w-full p-2 bg-darkBg-800 border border-cyan-500/30 rounded text-lightText-100 placeholder-lightText-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
          required
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 bg-cyan-600 text-darkBg-900 font-semibold rounded-lg hover:bg-cyan-700 transition-colors duration-300 border border-cyan-500"
        >
          Laisser un commentaire
        </button>
      </form>
    </div>
  );
};

export default Comments;
