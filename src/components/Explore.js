// App.js
import React, { useState } from "react";
import CategoryList from "./CategoryList";
import ImageList from "./ImageList";
import { categories } from "./data";
import "./Explore.css"; // Import your CSS file

function Explore() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <h1>Explore Korean Culture</h1>
      <CategoryList
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryClick={handleCategoryClick}
      />
      <div className="image-container">
        {selectedCategory && <ImageList category={selectedCategory} />}
      </div>
    </div>
  );
}

export default Explore;
