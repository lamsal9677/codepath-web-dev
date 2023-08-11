import React from "react";
import ContentCreatorCard from "../components/ContentCreatorCard";
import "../pages/pages-css/ShowCreators.css";
import supabase from "../../src/client"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ShowCreators() {

  const [contentCreators, setContentCreators] = useState([]);
  useEffect(() => {
    async function fetchContentCreators() {
      const { data, error } = await supabase.from('creators').select('*');
      if (error) {
        console.error('Error fetching content creators:', error);
      } else {
        setContentCreators(data);
      }
    }

    fetchContentCreators();
  }, []);

  return (
    <div className="show-creators-page">
      <h1>Content Creators</h1>
      <div className="content-creators-grid">
        {contentCreators.map((creator, index) => (
          <Link key={creator.id} to={`/view-creators/${creator.id}`}>
            <ContentCreatorCard
              key={creator.id}
              name={creator.name}
              url={creator.url}
              description={creator.description}
              imageURL={creator.imageURL}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
