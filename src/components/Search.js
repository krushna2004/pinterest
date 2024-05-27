import { useState } from "react";
export default function Search({searchResults})
{
    
  const [likedImages, setLikedImages] = useState([]);
  const [savedImages, setSavedImages] = useState([]);
  
  const handleLike = (imageId) => {
    if (likedImages.includes(imageId)) {
      // If already liked, remove from likedImages
      setLikedImages(likedImages.filter((id) => id !== imageId));
    } else {
      // If not liked, add to likedImages
      setLikedImages([...likedImages, imageId]);
    }
  };

  const handleSave = (imageId) => {
    if (savedImages.includes(imageId)) {
      // If already saved, remove from savedImages
      setSavedImages(savedImages.filter((id) => id !== imageId));
    } else {
      // If not saved, add to savedImages
      setSavedImages([...savedImages, imageId]);
    }
  };

    return (
        <div className="photo-results">
        {searchResults.map((photo) => (
          <div key={photo.id} className="photo-container">
            <img src={photo.webformatURL} alt={photo.tags} />
            <div className="photo-actions">
              <button
                className={`btn btn-outline-primary ${
                  likedImages.includes(photo.id) ? "liked" : ""
                }`}
                onClick={() => handleLike(photo.id)}
              >
                ❤
              </button>

              <button
                className={`btn btn-outline-success ${
                  savedImages.includes(photo.id) ? "saved" : ""
                }`}
                onClick={() => handleSave(photo.id)}
              >
                Save
              </button>
            </div>
          </div>
        ))}
      </div>

    );
}