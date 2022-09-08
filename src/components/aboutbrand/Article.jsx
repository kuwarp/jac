import React from "react";
import { Link } from "react-router-dom";
import "./article.css";
function Article({ imgUrl, text, data }) {
  // console.log("This is Article")
  // console.log(data)
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="blog_image" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <h3 className="h-color">{text}</h3>
        </div>
        {/* {(text = text.replaceAll(" ", "-").replaceAll("---", "-"))} */}
        <Link to={`/explore/${text.toLowerCase()}`}  state={{from:data}} >
          <p>Explore your vechile</p>
        </Link>
      </div>
    </div>
  );
}

export default Article;
