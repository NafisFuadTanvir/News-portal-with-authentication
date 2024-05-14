import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";
import Detailsnews from "../pages/DetailsNews/Detailsnews";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: ()=> fetch("news.json")

        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
           path: "/news/:id",
           element:<Detailsnews></Detailsnews>
        }
      ],
    },
  ]);

  export default router;