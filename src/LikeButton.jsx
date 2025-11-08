import React, { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

export default function LikeButton({ projectId }) {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const alreadyLiked = localStorage.getItem(`liked_${projectId}`);
    if (alreadyLiked) setLiked(true);
    fetchLikes();
  }, []);

  async function fetchLikes() {
    const { data, error } = await supabase
      .from("projects_likes")
      .select("likes")
      .eq("project_id", projectId)
      .maybeSingle();

    if (error) {
      console.error("Fetch error:", error);
      return;
    }

    if (data) {
      setLikes(data.likes);
    } else {
      const { error: insertError } = await supabase
        .from("projects_likes")
        .insert([{ project_id: projectId, likes: 0 }]);
      if (insertError) console.error("Insert error:", insertError);
      setLikes(0);
    }
  }

  async function handleLike() {
  if (liked) return;

  const { data: existing, error: selectError } = await supabase
    .from("projects_likes")
    .select("likes")
    .eq("project_id", projectId)
    .single();

  if (selectError && selectError.code !== "PGRST116") {
    console.error("Select error:", selectError);
    return;
  }

  try {
    if (!existing) {
      const { data, error } = await supabase
        .from("projects_likes")
        .insert([{ project_id: projectId, likes: 1 }])
        .select()
        .single();

      if (error) throw error;
      setLikes(data.likes);
    } else {
      const { data, error } = await supabase
        .from("projects_likes")
        .update({ likes: existing.likes + 1 })
        .eq("project_id", projectId)
        .select()
        .single();

      if (error) throw error;
      setLikes(data.likes);
    }

    setLiked(true);
    localStorage.setItem(`liked_${projectId}`, true);
  } catch (error) {
    if (error.code === "23505") {
      console.log("Like already exists — ignoring duplicate insert.");
    } else {
      console.error("Like error:", error);
    }
  }
}


  return (
    <li
      onClick={handleLike}
      style={{
        cursor: "pointer",
        color: liked ? "red" : "gray",
        userSelect: "none",
      }}
    >
      {likes} <i className="fa-solid fa-heart"></i>
    </li>
  );
}
