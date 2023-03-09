import React, { useState } from "react";
import Loading from "../shared/Loading";

const QuestionMaker = () => {
  const [answerCount, setAnswerCount] = useState<number | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      e.currentTarget.answerCount.value <= 1 ||
      e.currentTarget.answerCount.value >= 5
    ) {
      return setError("Value must be greater than 1 and smaller than 5");
    }
    setAnswerCount(parseInt(e.currentTarget.answerCount.value));
  };
  let registering = false


  const handleAddQuestion = (e:React.FormEvent<HTMLFormElement>) =>{

  }

  return (
    <div className="w-5/12 mt-[100px] shadow-md rounded-md bg-white py-5">
      {answerCount ? (
        <>
          <form onSubmit = {handleAddQuestion}>
            <div className="w-11/12 mx-auto mb-5">
              <label className="block text-[#539165] text-sm font-bold mb-2">
                Question
              </label>
              <textarea
                className="resize-none block w-full my-2 px-2 py-3 border-[#539165] border-1 rounded-lg bg-[#f5f5f5] placeholder-gray-400 text-gray-900 outline-[#539165]"
                placeholder="Add you question"
                name="question"
              />
            </div>

            {[...Array(answerCount)].map((_undefined, i: number) => (
              <div className="w-11/12 mx-auto mb-5" key={i}>
                <label className="block text-[#539165] text-sm font-bold mb-2">
                  Answer {i + 1}
                </label>
                <textarea
                  className="resize-none block w-full my-2 px-2 py-3 border-[#539165] border-1 rounded-lg bg-[#f5f5f5] placeholder-gray-400 text-gray-900 outline-[#539165]"
                  placeholder="Add your question"
                  name={`Answer${i}`}
                />
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-green-500 h-5 w-5"
                    name='correctAns'
                  />
                  <span className="ml-2 text-gray-700 font-medium">
                    Mark as correct answer
                  </span>
                </label>
              </div>
            ))}
            {registering ? (
              <Loading></Loading>
            ) : (
              <div className="w-11/12 mx-auto mb-5">
                <button className="bg-[#539165] text-white py-3 block w-full rounded-md hover:shadow-md">
                  Add
                </button>
              </div>
            )}
          </form>
        </>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="w-11/12 mx-auto mb-5 ">
            <label className="block text-[#539165] text-sm font-bold mb-2">
              How many probable answers do you want to show?
            </label>
            <div className="w-full flex items-center">
              <input
                className="resize-none block w-2/5 my-2 px-2 py-3 border-[#539165] border-1 rounded-lg bg-[#f5f5f5] placeholder-gray-400 text-gray-900 outline-[#539165]"
                placeholder="Input a number"
                name="answerCount"
                type="number"
              />
              <button
                type="submit"
                className="ml-5 cursor-pointer btn align-right bg-[#539165] rounded-md shadow-sm py-3 px-5 mr-3 text-white hover:shadow-gray-700 hover:shadow-sm"
              >
                Submit
              </button>
            </div>
            {error && (
              <div className="w-full mb-3">
                <small className="text-sm text-red-500">{error}</small>
              </div>
            )}
          </form>
        </>
      )}
    </div>
  );
};

export default QuestionMaker;
