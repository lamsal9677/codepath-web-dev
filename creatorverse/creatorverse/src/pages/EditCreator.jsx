import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import supabase from "../../src/client";
import "../pages/pages-css/EditCreator.css";

export default function EditCreator() {
  const { creatorId } = useParams();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    async function fetchCreatorData() {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .eq("id", creatorId)
        .single();

      if (error) {
        console.error("Error fetching creator data:", error);
      } else {
        setCreator(data);
      }
    }

    fetchCreatorData();
  }, [creatorId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const url = e.target.url.value;
    const description = e.target.description.value;
    const imageURL = e.target.imageURL.value;

    try {
      // Update the creator record in Supabase based on the creatorId
      const { data, error } = await supabase
        .from("creators")
        .update({
          name,
          url,
          description,
          imageURL,
        })
        .eq("id", creatorId);

      if (error) {
        console.error("Error updating creator:", error);
      } else {
        console.log("Creator updated successfully");
        window.location.href = "/view-creators/" + creatorId;
      }
    } catch (error) {
      console.error("Error updating creator:", error);
    }
  };

  if (!creator) {
    return <div>Loading...</div>;
  }

  return (
    <div className="edit-creator-form-container">
      <h2>Update a Content Creator</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" defaultValue={creator.name} required />
        </div>
        <div className="form-group">
          <label htmlFor="url">URL:</label>
          <input type="url" id="url" defaultValue={creator.url} required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" defaultValue={creator.description} required />
        </div>
        <div className="form-group">
          <label htmlFor="imageURL">Image URL (optional):</label>
          <input type="url" id="imageURL" defaultValue={creator.imageURL} />
        </div>
        <button type="submit">Update Information</button>
      </form>
    </div>
  );
}
