import { useEffect, useRef, useState } from "react";
import { ModalValues } from "../types/hookTypes";



const useQuizCreatorModal = (): ModalValues => {
  const [quizCreatorModal, setQuizCreatorModal] = useState(false);
  const quizCreatorModalRef = useRef<HTMLDivElement>(null);

  const handleClickOutsideModal = (event: MouseEvent): void => {
    if (quizCreatorModalRef.current && !quizCreatorModalRef.current.contains(event.target as Node)) {
      setQuizCreatorModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideModal, true);

    return () => {
      document.addEventListener("click", handleClickOutsideModal, true);
    };
  }, [quizCreatorModal]);

  const modalValues: ModalValues = {
    quizCreatorModal,
    setQuizCreatorModal,
    quizCreatorModalRef
  };

  return modalValues;
};

export default useQuizCreatorModal;
