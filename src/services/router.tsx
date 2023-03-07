import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import WelcomePage from "../pages/WelcomePage";

const router = createBrowserRouter([
  {
    path: "/welcome",
    element: <WelcomePage></WelcomePage>,
  },
  {
    path: "/",
    element: <HomePage/>,
  },
]);

export default router;
