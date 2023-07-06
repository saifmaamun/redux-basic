import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";





const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "*",
      element: <NotFound/>,
    },
]);

export default router;