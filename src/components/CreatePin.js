// CreatePin.js
import React, { useState } from "react";
import "./CreatePin.css";

function CreatePin() {
  const [title, setTitle] = useState("");
  const [altText, setAltText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a server)
    console.log("Pin submitted:", { title, altText, imageUrl });
  };

  return (
    <div className="create-pin-container">
      <div className="image-upload-container">
        {/* Left side for image upload */}
        <h2>Upload Image</h2>
        <div className="image-upload-box">
          {/* Place your image upload input here */}
          <input type="file" id="photoUpload" accept=".jpg, .jpeg, .png" />
        </div>
      </div>
      <div className="details-container">
        {/* Right side for other details */}
        <h2>Create Pin</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="altText">Alt Text</label>
            <input
              type="text"
              id="altText"
              value={altText}
              onChange={(e) => setAltText(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="imageUrl">Image URL</label>
            <input
              type="url"
              id="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </div>
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
}

export default CreatePin;
