import Content from "../components/Content/Content";
import("./Home.scss");

const Home = () => {
  return (
    <div className="home-container">
      <Content category={"home"} />
    </div>
  );
};

export default Home;
