import { QUESTION_TYPES } from "@/configs/consts/question.const";
import { HandleChangeQuestion, Question } from "@/types/question";
import { v4 as uuid } from "uuid";
import React, { useCallback, useState } from "react";
import NewQuestion from "../components/NewQuestion";
import NewQuestionHeader from "./NewQuestionHeader";

interface OneStepProps {
  handleQuestions: (questions: Question[]) => void;
}

const SecondStep = ({ handleQuestions }: OneStepProps) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const handleAddNewQuestion = useCallback(() => {
    const q: Question = {
      _id: uuid(),
      title: "Ingrese título de la pregunta",
      ask: "",
      type: QUESTION_TYPES.simple,
      answers: "",
      score: 0,
    };
    setQuestions((prev) => [...prev, q]);
  }, []);

  const handleDeleteQuestion = useCallback((id: string) => {
    setQuestions((prev) => prev.filter((q) => q._id !== id));
  }, []);

  const handleAddOption = useCallback((id: string, option: string) => {
    setQuestions((prevquestions) => {
      const questionindex = prevquestions.findIndex((q) => q._id === id);
      if (questionindex >= 0) {
        const question = prevquestions[questionindex];
        if (
          question.type === QUESTION_TYPES.radio ||
          question.type === QUESTION_TYPES.checkbox
        ) {
          let prevoptions: string[] = [];
          if (question.options) {
            prevoptions = question.options;
          }
          const newQ = {
            ...question,
            options: [...prevoptions, option],
          };
          const newQuestions = [...prevquestions];
          newQuestions.splice(questionindex, 1, newQ);
          return newQuestions;
        } else {
          return prevquestions;
        }
      } else {
        return prevquestions;
      }
    });
  }, []);

  const handleChange: HandleChangeQuestion = useCallback(
    ({ id, answer, ask, type, score }) => {
      setQuestions((prev) => {
        const findQuestionIndex = prev.findIndex((q) => q._id === id);
        if (findQuestionIndex >= 0) {
          const question = { ...prev[findQuestionIndex] };
          if (answer) question.answers = answer;
          if (typeof ask !== "undefined") question.ask = ask;
          if (type) {
            question.type = type;
            question.answers = "";
            if (
              type === QUESTION_TYPES.simple ||
              type === QUESTION_TYPES.complete
            ) {
              question.options = [];
            }
          }
          if (score) {
            question.score = score;
          }
          const newQuestions = [...prev];
          newQuestions.splice(findQuestionIndex, 1, question);
          return newQuestions;
        } else {
          return prev;
        }
      });
    },
    []
  );

  const handleInitialAnswer = useCallback((id: string, count: number) => {
    setQuestions((prevQ) => {
      const findQuestionIndex = prevQ.findIndex((q) => q._id === id);
      if (findQuestionIndex >= 0) {
        const question = { ...prevQ[findQuestionIndex] };
        if (question.type === QUESTION_TYPES.complete) {
          const answers = question.answers || [];
          if (answers.length < count) {
            for (let i = answers.length; i < count; i++) {
              answers.push("");
            }
          } else if (answers.length > count) {
            for (let i = answers.length - count; i > 0; i--) {
              answers.pop();
            }
          }
          question.answers = answers;
          const newQuestions = [...prevQ];
          newQuestions.splice(findQuestionIndex, 1, question);
          return newQuestions;
        } else {
          return prevQ;
        }
      } else {
        return prevQ;
      }
    });
  }, []);

  const changeInputs = useCallback(
    (id: string, value: string, index: number) => {
      setQuestions((prevQ) => {
        const findQuestionIndex = prevQ.findIndex((q) => q._id === id);
        if (findQuestionIndex >= 0) {
          const question = { ...prevQ[findQuestionIndex] };
          if (question.type === QUESTION_TYPES.complete) {
            const answers =
              question.answers && typeof question.answers === "object"
                ? [...question.answers]
                : [];
            answers[index] = value;
            question.answers = answers;
            const newQuestions = [...prevQ];
            newQuestions.splice(findQuestionIndex, 1, question);
            return newQuestions;
          } else {
            return prevQ;
          }
        } else {
          return prevQ;
        }
      });
    },
    []
  );

  return (
    <div className="h-full w-full flex flex-grow flex-col">
      <NewQuestionHeader handleAddNewQuestion={handleAddNewQuestion} />
      <ul className="flex-grow flex flex-col gap-4 px-4 pb-4">
        {questions.map((q, index) => (
          <li key={index}>
            <NewQuestion
              handleDelete={handleDeleteQuestion}
              question={q}
              position={index + 1}
              handleAddOption={handleAddOption}
              handleInitialAnswer={handleInitialAnswer}
              changeInputs={changeInputs}
              handleChange={handleChange}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SecondStep;
