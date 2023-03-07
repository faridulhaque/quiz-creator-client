import React from "react";

const QuizCard = () => {
  return (
    <div
      style={{
        boxShadow:
          "0px -1px 2px 0px rgba(0, 0, 0, 0.2), 0px 1px 2px 0px rgba(0, 0, 0, 0.2)",
        paddingTop: "5px",
      }}
      className="w-[96%] mx-auto shadow-md rounded-md h-[150px] mt-5 cursor-pointer"
    >
      <p
        className="text-center
    text-3xl text-gray-500 mt-[10px] mb-5"
      >
        Title
      </p>
      <div className="w-full flex items-center justify-around">
        <p className="text-sm text-gray-500 flex items-center flex-col">
          <span className="text-lg">Questions</span>
          <span className="text-sm mt-1">0</span>
        </p>
        <p className="text-sm text-gray-500 flex items-center flex-col">
          <span className="text-lg">Status</span>
          <span className="text-sm mt-1">incomplete</span>
        </p>
        <p className="text-sm text-gray-500 flex items-center flex-col">
          <span className="text-lg">Attendance</span>
          <span className="text-sm mt-1">0</span>
        </p>
        <p className="text-sm text-gray-500 flex items-center flex-col">
          <span className="text-lg">Duration</span>
          <span className="text-sm mt-1">Unlimited</span>
        </p>
      </div>
    </div>
  );
};

export default QuizCard;
