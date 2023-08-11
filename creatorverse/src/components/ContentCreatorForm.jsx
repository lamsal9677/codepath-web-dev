import React, { useState } from 'react';
import "../components/component-css/ContentCreatorForm.css"

const ContentCreatorForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [url, setURL] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContentCreator = {
      name,
      url,
      description,
      imageURL,
    };
    onSubmit(newContentCreator);
    // Reset form fields after submission
    setName('');
    setURL('');
    setDescription('');
    setImageURL('');
  };

  return (
    <div className="content-creator-form-container">
      <h2>Add a Content Creator</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="url">URL:</label>
          <input type="url" id="url" value={url} onChange={(e) => setURL(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="imageURL">Image URL (optional):</label>
          <input type="url" id="imageURL" value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
        </div>
        <button type="submit">Add Creator</button>
      </form>
    </div>
  );
};

export default ContentCreatorForm;
