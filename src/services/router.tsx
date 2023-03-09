import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import QuestionPaperPage from "../pages/QuestionPaperPage";
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
  {
    path: "/question_paper/:id",
    element: <QuestionPaperPage/>,
  },
]);

export default router;
