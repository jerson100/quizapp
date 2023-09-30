import { HandleChangeQuestion } from "@/types/question";
import { memo } from "react";

interface SimpleAnswerProps {
  id: string;
  answers?: string;
  handleChange: HandleChangeQuestion;
  idQuestion: string;
}

const SimpleAnswer = ({
  id,
  answers,
  handleChange,
  idQuestion,
}: SimpleAnswerProps) => {
  return (
    <>
      <div className="flex flex-col gap-1 items-start">
        <label
          htmlFor={`${id}-question-answer`}
          className="text-text-primary font-gordita-bold"
        >
          Respuesta:
        </label>
        <input
          id={`${id}-question-answer`}
          value={answers}
          name="answer"
          onChange={(e) =>
            handleChange({
              id: idQuestion,
              answer: e.target.value,
            })
          }
          placeholder="Indique la respuesta para la pregunta"
          className="font-inter-regular focus:bg-white focus:text-text-primary focus:outline-none focus:ring-2 focus:ring-text-primary focus:border-transparent border border-text-primary rounded-lg h-10 px-4"
        />
      </div>
    </>
  );
};

export default memo(SimpleAnswer);
