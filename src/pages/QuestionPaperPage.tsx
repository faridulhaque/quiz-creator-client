import React from "react";
import QuestionMaker from "../components/quesPaperPageComps/QuestionMaker";
import Questions from "../components/quesPaperPageComps/Questions";
import Navbar from "../components/shared/Navbar";

const QuestionPaperPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="w-11/12 mx-auto flex justify-between items-center">
        <QuestionMaker></QuestionMaker>
        <Questions></Questions>
      </div>
    </>
  );
};

export default QuestionPaperPage;
