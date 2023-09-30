import { memo } from "react";
import { MdOutlineAdd } from "react-icons/md";

interface NewQuestionHeaderProps {
  handleAddNewQuestion: () => void;
}

const NewQuestionHeader = ({
  handleAddNewQuestion,
}: NewQuestionHeaderProps) => {
  return (
    <div className="flex justify-between gap-4 items-center p-4 sticky top-[6.25rem] left-0 z-10 bg-white">
      <div>
        <h1 className="text-center text-text-primary font-gordita-bold text-xl">
          Lista de preguntas
        </h1>
      </div>
      <div>
        <button
          onClick={handleAddNewQuestion}
          className="bg-text-primary text-white font-bold rounded-lg  py-2 w-10 h-10 flex items-center justify-center active:scale-110 active:duration-300 transition-all hover:bg-text-primary hover:bg-opacity-80"
        >
          <MdOutlineAdd />
        </button>
      </div>
    </div>
  );
};

export default memo(NewQuestionHeader);
