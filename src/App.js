import { RouterProvider } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import router from "./routes/router";
// import "bootstrap/dist/css/bootstrap.css";
import("./App.scss");

const App = () => {
  return (
    <div className="wrapper">
      <Header></Header>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
