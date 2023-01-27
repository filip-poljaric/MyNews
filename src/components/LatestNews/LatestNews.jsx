import React from "react";
import "./LatestNews.scss";

const LatestNews = (props) => {
  return (
    <div className="latest">
      <div>
        <p className="latest-time">{props.time}</p>
        <p className="latest-title">{props.headline}</p>
      </div>
    </div>
  );
};

export default LatestNews;
