import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../pages/pages-css/ViewCreator.css";
import supabase from "../client"
import { Link } from "react-router-dom";

const ViewCreator = () => {
  const { creatorId } = useParams();
  const [creator, setCreator] = useState(null);
  const defaultImageURL = 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010';

  const fetchCreatorData = async () => {
    const { data, error } = await supabase
      .from('creators')
      .select('*')
      .eq('id', creatorId)
      .single();

    if (error) {
      console.error('Error fetching creator data:', error);
    } else {
      setCreator(data);
    }
  };

  useEffect(() => {
    fetchCreatorData();
  }, [creatorId]);

  const handleDelete = async () => {
    const shouldDelete = window.confirm("Are you sure you want to delete this creator?");
    if (shouldDelete) {
      try {
        // Delete the creator record from Supabase based on the creatorId
        const { data, error } = await supabase
          .from('creators')
          .delete()
          .eq('id', creatorId);

        if (error) {
          console.error('Error deleting creator:', error);
        } else {
          console.log('Creator deleted successfully');
          window.location.href = "/show-creators";
        }
      } catch (error) {
        console.error('Error deleting creator:', error);
      }
      console.log("Deleting creator with ID:", creatorId);
    }
  };

  const handleEdit = () => {
    console.log("Editing creator with ID:", creatorId);
  };



  if (!creator) {
    return <div>Loading...</div>;
  }

  return (
    <div className="view-creator-page">
      <div className="view-creator-box">
        <img src={creator.imageURL} alt={`${creator.name} Profile`} onError={(e) => { e.target.src = defaultImageURL; }} />
        <h2>{creator.name}</h2>
        <p>{creator.description}</p>
        <p>{creator.url}</p>
        <Link key={creator.id} to={`/edit-creators/${creator.id}`}>
          <button className="edit-button">Edit Creator</button>
        </Link>
        <button className="delete-button" onClick={handleDelete}>Delete Creator</button>
      </div>
    </div>
  );
};

export default ViewCreator;
