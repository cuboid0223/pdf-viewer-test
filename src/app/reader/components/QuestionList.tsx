import React, { useEffect, useState } from "react";
import { QuestionCard } from "./QuestionCard";
import { usePdfContext } from "@/app/context/PdfContext";

function QuestionList() {
  const QuestionList: Question[] = [
    {
      id: 1,
      forPage: 3,
      description:
        "The place is close to Barceloneta Beach and bus stop just 2 min bywalk and near to quot Naviglio quot  where you can enjoy the mainnight life in Barcelona.",
      options: ["sadsad", "sadsadas", "SADsadasd", "asdsads"],
    },
    {
      id: 2,
      forPage: 6,
      description:
        "The place is close to Barceloneta Beach and bus stop just 2 min bywalk and near to quot Naviglio quot  where you can enjoy the mainnight life in Barcelona.",
      options: ["sadsad", "sadsadas", "SADsadasd", "asdsads"],
    },
    {
      id: 3,
      forPage: 3,
      description:
        "The place is close to Barceloneta Beach and bus stop just 2 min bywalk and near to quot Naviglio quot  where you can enjoy the mainnight life in Barcelona.",
      options: ["sadsad", "sadsadas", "SADsadasd", "asdsads"],
    },
  ];

  const { fileInfo, setFileInfo } = usePdfContext();
  const [QuestionListForPage, setQuestionListForPage] = useState<Question[]>(
    []
  );
  useEffect(() => {
    showQuestionsForPage();
  }, [fileInfo?.currentPage]);

  const showQuestionsForPage = () => {
    let temp: Question[] = [];
    QuestionList.forEach((q) => {
      if (fileInfo?.currentPage === q.forPage) {
        temp.push(q);
      }
    });
    // console.log(temp);
    setQuestionListForPage(temp);
  };

  return (
    <div className="flex-column items-center  justify-center overflow-auto  touch-pan-y snap-y snap-mandatory">
      {QuestionListForPage.map((q, index) => (
        <div className="" key={index}>
          <QuestionCard info={q} />
        </div>
      ))}
    </div>
  );
}

export default QuestionList;
