import React from "react";

import("./Article.scss");

const Article = (props) => {
  return (
    <a href={props.url} target="_blank" rel="noreferrer" className="article">
      <img className="article-img" src={props.image} alt="" />
      <div className="article-info">
        <p className="article-category">{props.category}</p>
        <h2 className="article-title">{props.headline}</h2>
        <p className="article-author">{props.author}</p>
      </div>
    </a>
  );
};

export default Article;
