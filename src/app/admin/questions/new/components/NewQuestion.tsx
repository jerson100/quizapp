import React, { useCallback, useEffect, useId } from "react";
import { HandleChangeQuestion, Question } from "@/types/question";
import Editor from "@/components/common/Editor";
import { QUESTION_TYPES } from "@/configs/consts/question.const";
import SelectType from "./SelectType";
import SimpleAnswer from "./SimpleAnswer";
import OptionAnswers from "./OptionAnswers";
import Score from "./Score";
import Actions from "./Actions";

interface NewQuestionProps {
  question: Question;
  position: number;
  handleDelete: (id: string) => void;
  handleAddOption: (id: string, option: string) => void;
  //   handleRemoveOption: (id: string) => void;
  handleInitialAnswer: (id: string, count: number) => void;
  changeInputs: (id: string, value: string, index: number) => void;
  handleChange: HandleChangeQuestion;
}

const NewQuestion = ({
  question,
  position,
  handleDelete,
  handleAddOption,
  //   handleRemoveOption,
  handleInitialAnswer,
  changeInputs,
  handleChange,
}: NewQuestionProps) => {
  const id = useId();

  useEffect(() => {
    if (question.type === QUESTION_TYPES.complete) {
      const matcherAll = /\[\[input\]\]/g;
      const count = (question.ask.match(matcherAll) || []).length;
      handleInitialAnswer(question._id, count);
    }
  }, [question.ask, question._id, handleInitialAnswer, question.type]);

  const handleChangeEditor = useCallback(
    (value: string) => {
      handleChange({
        id: question._id,
        ask: value,
      });
    },
    [handleChange, question._id]
  );

  const _changeInputs = useCallback(
    (value: string, index: number) => {
      changeInputs(question._id, value, index);
    },
    [changeInputs, question._id]
  );

  const handleClear = useCallback(() => {
    handleChange({
      id: question._id,
      ask: "",
    });
  }, [handleChange, question._id]);

  const handleChangeMultipleAnswer = useCallback(
    (index: number, checked: boolean) => {
      if (question.type === QUESTION_TYPES.checkbox) {
        handleChange({
          id: question._id,
          answer: checked
            ? [...(question.answers as number[]), index]
            : (question.answers as number[]).filter((a) => a !== index),
        });
      } else if (question.type === QUESTION_TYPES.radio) {
        handleChange({
          id: question._id,
          answer: [index],
        });
      }
    },
    [handleChange, question._id, question.answers, question.type]
  );
  return (
    <div className="bg-[#f7f7f7] p-4 border border-solid border-text-primary relative rounded-md shadow-md shadow-text-primary">
      <Actions
        handleDelete={handleDelete}
        position={position}
        questionId={question._id}
      />
      <div className="ml-5 mr-5 flex flex-col gap-4">
        <div className="flex gap-6">
          <SelectType
            type={question.type}
            id={id}
            handleChange={handleChange}
            questionId={question._id}
          />
          <Score
            questionId={question._id}
            id={id}
            handleChange={handleChange}
            score={question.score}
          />
        </div>
        <div className="flex flex-col gap-1 items-start">
          <Editor
            changeInputs={_changeInputs}
            isInput={question.type === QUESTION_TYPES.complete}
            value={question.ask}
            onChange={handleChangeEditor}
            handleClear={handleClear}
            valueInputs={question.answers as string[]}
          />
        </div>
        {question.type === QUESTION_TYPES.simple && (
          <SimpleAnswer
            id={id}
            answers={question.answers}
            handleChange={handleChange}
            idQuestion={question._id}
          />
        )}
        {(question.type === QUESTION_TYPES.radio ||
          question.type === QUESTION_TYPES.checkbox) && (
          <OptionAnswers
            questionId={question._id}
            options={question.options}
            answers={question.answers}
            type={question.type}
            id={id}
            handleAddOption={handleAddOption}
            handleChangeMultipleAnswer={handleChangeMultipleAnswer}
          />
        )}
      </div>
    </div>
  );
};

export default React.memo(NewQuestion);
