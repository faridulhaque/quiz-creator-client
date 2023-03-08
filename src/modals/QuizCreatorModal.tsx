import React, { useContext } from "react";
import { GlobalContext } from "../services/Context";

const QuizCreatorModal = () => {
  const { modalValues } = useContext(GlobalContext);

  const { setQuizCreatorModal, quizCreatorModalRef } = modalValues;

  

  return (
    <div className="fixed w-[100%] h-[100vh] bottom-0 left-0 bg-basic z-[10] bg-opacity-[0.3] bg-black">
      <div
        ref={quizCreatorModalRef}
      
      className={` bg-white absolute top-0 bottom-0 left-0 right-0 m-auto w-4/12 h-20 px-5 modal-motion`}
      >
        <span
          onClick={() => setQuizCreatorModal(false)}
          className="bg-basic rounded-full text-white bg-gray-600 absolute right-[-10px] top-[-10px] py-2 px-3 cursor-pointer shadow-xl"
        >
          X
        </span>
      </div>
    </div>
  );
};

export default QuizCreatorModal;
