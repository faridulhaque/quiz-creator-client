import React, { useContext, useState } from "react";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import { GlobalContext } from "../services/Context";
import "react-datepicker/dist/react-datepicker.css";
import en from "date-fns/locale/en-US";
import { useCreateQuestionPaperMutation } from "../api/queries/questionPaperApi";
import Loading from "../components/shared/Loading";

registerLocale("en-US", en);

const QuizCreatorModal = () => {
  const minDate = new Date();

  const { modalValues } = useContext(GlobalContext);

  let user = JSON.parse(localStorage.getItem("user") || "null");

  const { setQuizCreatorModal, quizCreatorModalRef } = modalValues;

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const [createPaper, { isLoading, error, data }] =
    useCreateQuestionPaperMutation<any>();

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const moderator = user?.email;
    const title = e.currentTarget.heading.value;
    const start = selectedDate;

    const hour = e.currentTarget.hour.value;
    const min = e.currentTarget.min.value;
    const sec = e.currentTarget.sec.value;

    const duration = {
      hour,
      min,
      sec,
    };

    const questionPaperInfo = {
      moderator,
      title,
      start,
      duration,
    };

    createPaper(questionPaperInfo);
  };

  if (error) {
    console.log(error);
  }

  return (
    <div className="fixed w-[100%] h-[100vh] bottom-0 left-0 bg-basic z-[10] bg-opacity-[0.3] bg-black">
      <form
        onSubmit={handleSubmit}
        ref={quizCreatorModalRef}
        className={`${
          data?.data?._id ? "h-[200px]" : "h-[400px]"
        } bg-white absolute top-0 bottom-0 left-0 right-0 m-auto w-4/12 px-5 py-10 rounded-md modal-motion`}
      >
        <span
          onClick={() => setQuizCreatorModal(false)}
          className="bg-basic rounded-full text-white bg-gray-600 absolute right-[-10px] top-[-10px] py-2 px-3 cursor-pointer shadow-xl"
        >
          X
        </span>
        {data?.data?._id ? (
          <div className="w-11/12 mx-auto">
            <p className="text-center text-lg text-[#539165] mt-5">
              {" "}
              You have successfully created your question paper!
            </p>

            <button
              onClick={() => setQuizCreatorModal(false)}
              type="button"
              className="mt-5 w-full block cursor-pointer btn align-right bg-[#539165] rounded-md shadow-sm py-3 px-5 mr-3 text-white hover:shadow-gray-700 hover:shadow-sm"
            >
              Okay
            </button>
          </div>
        ) : (
          <>
            <div className="w-11/12 mx-auto mb-5">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Title
              </label>
              <input
                className="block w-full my-2 px-2 py-3 rounded-lg bg-gray-100 placeholder-gray-500 text-gray-900 outline-gray-300"
                type="text"
                placeholder="Enter question's paper title"
                name="heading"
                required
              />
            </div>

            <div className="w-11/12 mx-auto mb-5">
              <ReactDatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                timeCaption="Time"
                placeholderText="Select a date"
                minDate={minDate}
                className="block w-full p-2 text-lg text-gray-900 bg-gray-100 placeholder-gray-400 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                // popperClassName="w-64"
                // popperModifiers={{
                //   preventOverflow: {
                //     enabled: true,
                //     escapeWithReference: false,
                //     boundariesElement: "viewport"
                //   }
                // }}
                locale="en-US" // Set the locale
              />
            </div>

            <div className="w-11/12 mx-auto mb-5 flex items-center justify-between">
              <div className="w-1/4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Hour
                </label>
                <input
                  className="block w-full my-2 px-2 py-3 rounded-lg bg-gray-100 placeholder-gray-500 text-gray-900 outline-gray-300"
                  type="text"
                  placeholder="Hour"
                  name="hour"
                />
              </div>

              <div className="w-1/4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Min
                </label>
                <input
                  className="block w-full my-2 px-2 py-3 rounded-lg bg-gray-100 placeholder-gray-500 text-gray-900 outline-gray-300"
                  type="text"
                  placeholder="Minute"
                  name="min"
                />
              </div>
              <div className="w-1/4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Sec
                </label>
                <input
                  className="block w-full my-2 px-2 py-3 rounded-lg bg-gray-100 placeholder-gray-500 text-gray-900 outline-gray-300"
                  type="text"
                  placeholder="Second"
                  name="sec"
                />
              </div>
            </div>

            {isLoading ? (
              <Loading></Loading>
            ) : (
              <div className="w-11/12 mx-auto mb-5">
                <button
                  // onClick={() => setQuizCreatorModal(true)}
                  className="cursor-pointer btn align-right bg-[#539165] rounded-md shadow-sm py-3 px-5 mr-3 text-white hover:shadow-gray-700 hover:shadow-sm block w-full"
                >
                  Add a question paper
                </button>
              </div>
            )}
          </>
        )}
      </form>
    </div>
  );
};

export default QuizCreatorModal;
