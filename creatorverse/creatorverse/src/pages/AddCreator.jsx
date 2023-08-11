import React from "react";
import "../pages/pages-css/AddCreator.css";
import supabase from "../client"

//handle submit console logs the name and description
const handleSubmit = async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const url = document.getElementById("url").value;
  const description = document.getElementById("description").value;
  const imageURL = document.getElementById("imageURL").value;

  const { data, error } = await supabase
    .from("creators")
    .insert([
      { name: name, url: url, description: description, imageURL: imageURL },
    ]);

  // Reset form fields after submission
  document.getElementById("name").value = "";
  document.getElementById("url").value = "";
  document.getElementById("description").value = "";
  document.getElementById("imageURL").value = "";

  //go to show creators page
  window.location.href = "/show-creators";
};

export default function AddCreator() {
  return (
    <div className="add-creator-form-container">
      <h2>Add a Content Creator</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="url">URL:</label>
          <input type="url" id="url" required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" required />
        </div>
        <div className="form-group">
          <label htmlFor="imageURL">Image URL (optional):</label>
          <input type="url" id="imageURL" />
        </div>
        <button type="submit">Add Creator</button>
      </form>
    </div>
  );
}