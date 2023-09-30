import { memo } from "react";
import { QUESTION_TYPES } from "@/configs/consts/question.const";
import { HandleChangeQuestion } from "@/types/question";

interface SelectTypeProps {
  type: string;
  id: string;
  questionId: string;
  handleChange: HandleChangeQuestion;
}

const SelectType = ({
  type,
  id,
  questionId,
  handleChange,
}: SelectTypeProps) => {
  return (
    <div className="flex flex-col gap-1 items-start">
      <label
        htmlFor={`${id}-option`}
        className="font-gordita-bold text-text-primary"
      >
        Seleccione una opción:
      </label>
      <select
        id={`${id}-option`}
        name="type"
        className="border border-text-primary rounded-lg h-10 px-4 font-inter-regular focus:outline-none focus:ring-2 focus:ring-text-primary focus:border-transparent w-40"
        value={type}
        onChange={(e) =>
          handleChange({
            id: questionId,
            type: e.target.value as keyof typeof QUESTION_TYPES,
          })
        }
      >
        <option value="simple">Simple</option>
        <option value="radio">Radio</option>
        <option value="checkbox">Checkbox</option>
        <option value="complete">Completar</option>
      </select>
    </div>
  );
};

export default memo(SelectType);
