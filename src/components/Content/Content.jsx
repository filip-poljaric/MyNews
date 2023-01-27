import Cateegory from "../Category/Category";
import Article from "../Layout/Article/Article";
import LatestNews from "../LatestNews/LatestNews";
import React, { useEffect, useState } from "react";

import HomeIcon from "../../assets/icons/home.svg";
import GeneralIcon from "../../assets/icons/general.svg";
import BuisnessIcon from "../../assets/icons/buisness.png";
import HealthIcon from "../../assets/icons/health.png";
import ScienceIcon from "../../assets/icons/science.png";
import SportIcon from "../../assets/icons/sport.png";
import TechnologyIcon from "../../assets/icons/technology.svg";
import LatestIcon from "../../assets/icons/Oval.png";
import newsLogo from "../../assets/MyNews.png";

import("./Content.scss");

const Content = ({ category }) => {
  const [news, setNews] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getNews = async (cat) => {
    const newsResponse = await fetch(
      `https://api.nytimes.com/svc/topstories/v2/${cat}.json?api-key=xwTETr3VjMExYrCU674vAu20mAuDcgRC`
    );
    const resJson = await newsResponse.json();
    const mappedNews = resJson.results.map((article) => {
      let image = "/placeholder.png";
      if (
        article.multimedia &&
        article.multimedia.length &&
        article.multimedia.length > 1
      ) {
        image = article.multimedia[1]?.url;
      }
      return {
        image: image,
        category: article.section,
        headline: article.title,
        author: article.byline,
        time: article.published_date,
        url: article.url,
      };
    });
    setNews(mappedNews);
    console.log(resJson.results);
  };

  useEffect(() => {
    getNews(category);
  }, [category]);

  const handleSearch = async () => {
    const newsResponse = await fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchValue}&api-key=xwTETr3VjMExYrCU674vAu20mAuDcgRC`
    );
    const resJson = await newsResponse.json();

    const mappedNews = resJson.response.docs.map((article) => {
      let image = "/placeholder.png";
      if (
        article.multimedia &&
        article.multimedia.length &&
        article.multimedia.length > 1
      ) {
        image = article.multimedia.find(
          (img) => img.subType === "threeByTwoSmallAt2X"
        ).url;
      }
      return {
        image: "https://static01.nyt.com/" + image,
        category: article.news_desk,
        headline: article.headline.main,
        author: article.byline.original,
        time: article.pub_date,
        url: article.web_url,
      };
    });
    setNews(mappedNews);
  };

  // console.log(news);
  // console.log(searchValue);
  return (
    <>
      <div className="search-container">
        <div>
          <img src={newsLogo} alt="" />
        </div>
        <div className="search-input-container">
          <input
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            placeholder="Search News"
            type="text"
            className="search-input"
          />
          <button onClick={handleSearch} className="search-btn">
            SEARCH
          </button>
        </div>
      </div>

      <div className="content-container">
        <div className="category-container">
          <Cateegory Icon={HomeIcon} text="Home" />
          <Cateegory Icon={GeneralIcon} text="World" />
          <Cateegory Icon={BuisnessIcon} text="Business" />
          <Cateegory Icon={HealthIcon} text="Health" />
          <Cateegory Icon={ScienceIcon} text="Science" />
          <Cateegory Icon={SportIcon} text="Sports" />
          <Cateegory Icon={TechnologyIcon} text="Technology" />
        </div>
        <div className="news-container">
          <div className="news-heading">News</div>
          <div className="latest-news-container">
            <div className="latest-news-container-title">
              <img
                className="latest-news-container-title-icon"
                alt=""
                src={LatestIcon}
              />
              <p className="latest-news-container-title-text">Latest news</p>
            </div>

            {news.map((article) => (
              <LatestNews
                key={article.headline}
                time={article.time}
                headline={article.headline}
              />
            ))}
          </div>

          {news.map((article) => {
            return (
              <Article
                key={article.headline}
                image={article.image}
                category={article.category}
                headline={article.headline}
                author={article.author}
                url={article.url}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Content;
