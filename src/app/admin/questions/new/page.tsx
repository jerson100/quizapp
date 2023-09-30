"use client";
import Step from "@/components/common/Step";
import React, { useCallback, useState } from "react";
import OneStep from "./components/oneStep";
import { Questionnaire } from "@/types/questionnaire";
import SecondStep from "./components/secondStep";
import { Question } from "@/types/question";

const page = () => {
  const [questionaire, setQuestionaire] = useState<Questionnaire>({
    title: "",
    status: 1,
    questions: [],
  });
  const handleFirstStep = useCallback(
    ({
      title,
      startDate,
      endDate,
    }: {
      title: string;
      startDate: Date;
      endDate: Date;
    }) => setQuestionaire((prev) => ({ ...prev, title, startDate, endDate })),
    []
  );

  const handleQuestions = useCallback((questions: Question[]) => {
    setQuestionaire((prev) => ({
      ...prev,
      questions: questions,
    }));
  }, []);

  console.log(questionaire);
  return (
    <div className="container bg-white border flex-grow my-4 flex items-center justify-center flex-col">
      <Step.Root>
        <Step.List>
          <Step.Item>
            <OneStep handleChange={handleFirstStep} />
          </Step.Item>
          <Step.Item>
            <SecondStep handleQuestions={handleQuestions} />
          </Step.Item>
        </Step.List>
      </Step.Root>
    </div>
  );
};

export default page;
