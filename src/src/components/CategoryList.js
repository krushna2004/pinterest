// CategoryList.js
import React from "react";

function CategoryList({ categories, selectedCategory, onCategoryClick }) {
  return (
    <ul className="category-list">
      {categories.map((category) => (
        <li
          key={category.id}
          className={selectedCategory === category ? "active" : ""}
          onClick={() => onCategoryClick(category)}
        >
          {category.name}
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;
