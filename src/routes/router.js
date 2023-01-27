import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CategoryPage from "../pages/CategoryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/category/:id",
    element: <CategoryPage />,
  },
]);

export default router;
