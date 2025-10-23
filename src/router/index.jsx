import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Categories from "../pages/Categories";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "categories", element: <Categories /> },
    ],
  },
  
]);
export default router;
