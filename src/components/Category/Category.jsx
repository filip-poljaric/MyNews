import { Link, useParams } from "react-router-dom";

import("./Category.scss");

const Cateegory = ({ Icon, text }) => {
  const { id } = useParams();
  let link = `/category/${text.toLowerCase()}`;
  if (text === "Home") {
    link = "/";
  }
  const isActive = text.toLowerCase() === id || (!id && text === "Home");
  return (
    <Link to={link} className="link">
      <div className={`category ${isActive ? "active" : ""}`}>
        <img src={Icon} className="category-icon" alt="" />
        <p className="category-text">{text}</p>
      </div>
    </Link>
  );
};

export default Cateegory;
