import React from "react";
import { useNavigate } from "react-router-dom";

const QuizCard = ({ quizPaper }: any) => {
  const { questions, duration, status, attendance, title, _id } = quizPaper;

  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/question_paper/${_id}`)}
      style={{
        boxShadow:
          "0px -1px 2px 0px rgba(0, 0, 0, 0.2), 0px 1px 2px 0px rgba(0, 0, 0, 0.2)",
        paddingTop: "5px",
      }}
      className="w-[96%] mx-auto shadow-md rounded-md h-[150px] mt-5 cursor-pointer hover:border-[1px] border-[#539165]"
    >
      <p
        className="text-center
    text-3xl text-gray-500 mt-[10px] mb-5"
      >
        {title}
      </p>
      <div className="w-full flex items-center justify-around">
        <p className="text-sm text-gray-500 flex items-center flex-col">
          <span className="text-lg">Questions</span>
          <span className="text-sm mt-1">{questions?.length}</span>
        </p>
        <p className="text-sm text-gray-500 flex items-center flex-col">
          <span className="text-lg">Status</span>
          <span className="text-sm mt-1">
            {status ? "Complete" : "Incomplete"}
          </span>
        </p>
        <p className="text-sm text-gray-500 flex items-center flex-col">
          <span className="text-lg">Attendance</span>
          <span className="text-sm mt-1">{attendance?.length}</span>
        </p>
        <p className="text-sm text-gray-500 flex items-center flex-col">
          <span className="text-lg">Duration</span>
          <span className="text-sm mt-1">
            {duration?.hour}:{duration?.min}:{duration?.sec}
          </span>
        </p>
      </div>
    </div>
  );
};

export default QuizCard;
