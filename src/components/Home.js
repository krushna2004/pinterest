// src/components/PinterestLayout.js
import React, { useState, useEffect } from 'react';
import './Home.css';
import axios from 'axios';

const Home = () => {
  const [photos, setPhotos] = useState([]);
  const [clickedPhoto, setClickedPhoto] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/photos/random/?count=24&client_id=mZybSi0QKvvfobenIk_oRQKFDSFLSC1eM8NhFmDDOHk`
        );
        setPhotos(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleImageClick = (photo) => {
    if (clickedPhoto === photo) {
      setClickedPhoto(null); // If already clicked, unclick on click
    } else {
      setClickedPhoto(photo); // Click on click
    }
  };

  return (
    <div className="pinterest-layout">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className={`pinterest-item ${clickedPhoto === photo ? 'clicked' : ''}`}
          onClick={() => handleImageClick(photo)}
        >
          <img src={photo.urls.regular} alt={photo.alt_description} />
          <div className="photo-actions">
            <button className="like-button">Like</button>
            <button className="save-button">Save</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
