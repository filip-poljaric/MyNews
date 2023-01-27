import Content from "../components/Content/Content";
import { useParams } from "react-router-dom";

import("./Home.scss");

const CategoryPage = () => {
  const { id } = useParams();

  return (
    <div className="home-container">
      <Content category={id} />
    </div>
  );
};

export default CategoryPage;
