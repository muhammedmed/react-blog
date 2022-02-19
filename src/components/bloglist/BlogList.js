import React from "react";
import "./bloglist.scss";
function BlogList({ items }) {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + " ..." : string;
  }
  return (
    <div className="section-center">
      {items.map((blogItem) => {
        const { id, title, img, desc, category } = blogItem;

        return (
          <div className="container" key={id}>
            <div className="card">
              <div className="card__header">
                <img
                  src={img}
                  className="card__image"
                  alt=""
                  style={{ width: "600px" }}
                />
              </div>
              <div className="card__body">
                <span className="tag tag-blue">{category}</span>
                <h4>{truncate(title, 25)}</h4>
                <p>{truncate(desc, 200)}</p>
                <button>Read More</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BlogList;
