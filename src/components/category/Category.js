import React,{useState} from "react";
import "./category.scss";
function Category({ categories, filterItems }) {
  const [currentCategory, setCurrenCategory] = useState(1);
  return (
    <div className="categories">
      <h1>Categories</h1>
      <div className="btn-container">
        {categories.map((category, index) => {
          return (
            <li className={currentCategory === index ? "active" : "none"} onClick={() => setCurrenCategory(index)}>
            <button
              type="button"
              key={index}
              onClick={() => filterItems(category)}
              className="filter-btn"
            >
              {category}
            </button>
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
