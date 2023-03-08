import React, { useContext } from "react";
import HomeLeft from "../components/homePageComps/HomeLeft";
import HomeMid from "../components/homePageComps/HomeMid";
import HomeRight from "../components/homePageComps/HomeRight";
import Navbar from "../components/shared/Navbar";
import QuizCreatorModal from "../modals/QuizCreatorModal";
import { GlobalContext } from "../services/Context";

const HomePage = () => {
  const { modalValues } = useContext(GlobalContext);
  const { quizCreatorModal, setQuizCreatorModal } = modalValues;


  return (
    <>
      <div className="w-full h-screen">
        <Navbar></Navbar>
        <div className="flex justify-evenly w-full h-full">
          <HomeLeft></HomeLeft>
          <HomeMid setQuizCreatorModal={setQuizCreatorModal} quizCreatorModal={quizCreatorModal}></HomeMid>
          <HomeRight></HomeRight>
        </div>
      </div>
    </>
  );
};

export default HomePage;
