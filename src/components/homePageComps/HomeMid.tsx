import { useGetQuestionPapersQuery } from "../../api/queries/questionPaperApi";
import QuizCreatorModal from "../../modals/QuizCreatorModal";
import QuizCard from "../reusable/QuizCard";
import SearchBox from "../reusable/SearchBox";
import Loading from "../shared/Loading";

const HomeMid = ({
  setQuizCreatorModal,
  quizCreatorModal,
}: {
  setQuizCreatorModal: (value: boolean) => void;
  quizCreatorModal: boolean;
}) => {

  let user = JSON.parse(localStorage.getItem("user") || "null");
  
  const { isLoading, error, data } = useGetQuestionPapersQuery<any>(user?.email);




  return (
    <div className="relative w-[40%] h-[975px] overflow-y-scroll mt-[100px] bg-white rounded-md shadow-lg border-[#539165] border-y-4">
      <div className="w-full h-20 flex items-center justify-between">
        <p className="ml-3 text-xl text-[#539165]">Quiz by you</p>
        <button
          onClick={() => setQuizCreatorModal(true)}
          className="cursor-pointer btn align-right bg-[#539165] rounded-md shadow-sm py-3 px-5 mr-3 text-white hover:shadow-gray-700 hover:shadow-sm"
        >
          Add a question paper
        </button>
      </div>

      <SearchBox></SearchBox>

      {isLoading ? (
        <Loading></Loading>
      ) : (
        data?.data?.map((d: any) => <QuizCard quizPaper={d}></QuizCard>)
      )}
      {quizCreatorModal && <QuizCreatorModal></QuizCreatorModal>}
    </div>
  );
};

export default HomeMid;
