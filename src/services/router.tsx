import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import WelcomePage from "../pages/WelcomePage";

const router = createBrowserRouter([
  {
    path: "/welcome",
    element: <WelcomePage></WelcomePage>,
  },
  {
    path: "/",
    element: <App />,
  },
]);

export default router;
