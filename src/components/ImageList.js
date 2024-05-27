// ImageList.js
import React, { useEffect } from "react";
import { images } from "./data";

function ImageList({ category }) {
  useEffect(() => {
    adjustImageHeights();
  }, [category]);

  const adjustImageHeights = () => {
    const imageContainer = document.querySelector(".image-container");
    if (imageContainer) {
      const imageCards = imageContainer.querySelectorAll(".image-card");
      let tallestImage = 0;

      imageCards.forEach((imageCard) => {
        const image = imageCard.querySelector("img");
        if (image && image.clientHeight > tallestImage) {
          tallestImage = image.clientHeight;
        }
      });

      imageCards.forEach((imageCard) => {
        imageCard.style.height = `${tallestImage}px`;
      });
    }
  };

  const filteredImages = images.filter(
    (image) => image.category === category.id
  );

  return (
    <div className="photo-results">
      {filteredImages.map((image) => (
        <div className="photo-card" key={image.id}>
          <img src={image.url} alt={image.url} />
          {/* Add your like and save buttons here (if applicable) */}
        </div>
      ))}
    </div>
  );
}

export default ImageList;
