import React from 'react';
import "../components/component-css/ContentCreatorCard.css"

const ContentCreatorCard = ({ name, url, description, imageURL }) => {
  const defaultImageURL = 'https://i.imgur.com/uHz1OsL.jpeg';
  return (
    <div className="content-creator-card">
      <img src={imageURL} alt={`${name} Profile`} onError={(e) => { e.target.src = defaultImageURL; }} />
      <h2>{name}</h2>
      <p>{url}</p>
      <p>{description}</p>
    </div>
  );
};

export default ContentCreatorCard;
