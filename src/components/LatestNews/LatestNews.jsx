import React from "react";
import "./LatestNews.scss";

const LatestNews = (props) => {
  return (
    <a href={props.url} target="_blank" rel="noreferrer" className="latest">
      <div>
        <p className="latest-time">{props.time}</p>
        <p className="latest-title">{props.headline}</p>
      </div>
    </a>
  );
};

export default LatestNews;
