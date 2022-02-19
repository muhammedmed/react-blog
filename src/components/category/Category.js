import React from "react";
import "./category.scss";
function Category({ categories, filterItems }) {
  return (
    <div className="categories">
      <h1>Categories</h1>
      <div className="btn-container">
        {categories.map((category, index) => {
          return (
            <button
              type="button"
              key={index}
              onClick={() => filterItems(category)}
              className="filter-btn"
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
