import { QUESTION_TYPES } from "@/configs/consts/question.const";
import React, {
  useState,
  memo,
  ChangeEvent,
  useCallback,
  useMemo,
} from "react";

interface OptionAnswersProps {
  id: string;
  questionId: string;
  handleAddOption: (id: string, option: string) => void;
  options?: string[];
  type: keyof typeof QUESTION_TYPES;
  handleChangeMultipleAnswer: (index: number, checked: boolean) => void;
  answers?: number[];
}

const OptionAnswers = ({
  questionId,
  options,
  type,
  id,
  handleAddOption,
  handleChangeMultipleAnswer,
  answers,
}: OptionAnswersProps) => {
  const [answer, setAnswer] = useState("");
  const _handleChangeMultipleAnswer = useCallback(
    (e: ChangeEvent<HTMLInputElement>, index: number) => {
      console.log(e.target.checked, index);
      handleChangeMultipleAnswer(index, e.target.checked);
    },
    [handleChangeMultipleAnswer]
  );
  const abc = useMemo(() => {
    return "a,b,c,d,e,f,g,h,i,j,k,l,m,n,ñ,o,p,q,r,s,t,u,v,w,x,y,z".split(",");
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <p className="font-gordita-bold text-text-primary">
        Opciones de respuesta:
      </p>
      <div className="flex gap-4">
        <input
          type="text"
          //   name="option"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          onKeyUp={(e) => {
            console.log(e.key);
            if (e.key === "Enter") {
              e.preventDefault();
              handleAddOption(questionId, answer);
              setAnswer("");
            }
          }}
          placeholder="Opción"
          className="border border-gray-300 rounded-lg h-10 px-4 font-inter-regular focus:outline-none focus:ring-2 focus:ring-text-primary focus:border-transparent"
        />
        <button
          type="button"
          className="bg-text-primary text-white font-inter-regular rounded-lg px-4 py-2 h-10 flex items-center justify-center active:scale-110 active:duration-300 transition-all hover:bg-text-primary hover:bg-opacity-70"
          onClick={(e) => {
            e.preventDefault();
            handleAddOption(questionId, answer);
            setAnswer("");
          }}
        >
          Agregar
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <ul className="flex flex-col gap-4">
          {options?.map((option, index) => (
            <li key={index} className="w-fit">
              <label className="flex items-center border-text-primary border bg-white rounded-md py-2 px-4 cursor-pointer hover:bg-text-primary hover:bg-opacity-5 hover:text-text-primary shadow-md hover:scale-105 transition-transform duration-300">
                <input
                  type={type}
                  name={`${id}-question-answer`}
                  className="mr-4 accent-text-primary"
                  onChange={(e) => _handleChangeMultipleAnswer(e, index)}
                  checked={answers?.includes(index)}
                />
                <span className="font-inter-bold mr-2 text-text-primary">
                  {abc[index]})
                </span>
                <span>{option}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default memo(OptionAnswers);
