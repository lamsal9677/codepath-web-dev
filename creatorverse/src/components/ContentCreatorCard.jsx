// ContentCreatorCard.jsx
import React from 'react';
import '../components/component-css/ContentCreatorCard.css';

const ContentCreatorCard = ({ name, url, description, imageURL }) => {
  const defaultImageURL = 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010';
  return (
    <div className="content-creator-card">
      <img src={imageURL || defaultImageURL} alt={`${name} Profile`} />
      <h2>{name}</h2>
      <p>{url}</p>
      <p>{description}</p>
    </div>
  );
};

export default ContentCreatorCard;
