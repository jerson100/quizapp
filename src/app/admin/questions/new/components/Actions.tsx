import { memo } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

interface ActionsProps {
  position: number;
  handleDelete: (id: string) => void;
  questionId: string;
}

const Actions = ({ position, handleDelete, questionId }: ActionsProps) => {
  return (
    <>
      <div className="absolute left-1 top-1 rounded-full border-text-secondary text-white bg-text-secondary w-6 h-6 flex items-center justify-center font-gordita-bold shadow-xl">
        {position}
      </div>
      <button
        onClick={() => handleDelete(questionId)}
        className="absolute right-1 top-1 rounded-full border-red-600 text-white bg-red-600 w-6 h-6 flex items-center justify-center font-gordita-bold shadow-xl cursor-pointer hover:bg-text-primary hover:bg-opacity-80"
      >
        <AiFillCloseCircle className="fill-white" />
      </button>
    </>
  );
};

export default memo(Actions);
