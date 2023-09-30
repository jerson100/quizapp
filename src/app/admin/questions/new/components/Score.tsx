import { HandleChangeQuestion } from "@/types/question";
import { memo } from "react";

interface ScoreProps {
  id: string;
  questionId: string;
  handleChange: HandleChangeQuestion;
  score: number;
}

const Score = ({ id, score, handleChange, questionId }: ScoreProps) => {
  return (
    <div className="flex flex-col gap-1 items-start">
      <label
        htmlFor={`${id}-puntaje`}
        className="font-gordita-bold text-text-primary"
      >
        Puntaje:
      </label>
      <input
        type="number"
        min={1}
        name="score"
        value={score}
        onChange={(e) =>
          handleChange({ id: questionId, score: +e.target.value })
        }
        className="border  rounded-lg h-10 px-4 font-inter-regular focus:outline-none focus:ring-2 focus:ring-text-primary focus:border-transparent w-20 border-text-primary"
        id={`${id}-puntaje`}
      />
    </div>
  );
};

export default memo(Score);
