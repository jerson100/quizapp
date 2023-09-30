import { QUESTION_TYPES } from "@/configs/consts/question.const";
import { Questionnaire } from "./questionnaire";
import { User } from "./user";

export type HandleChangeQuestion = ({
  id,
  answer,
  ask,
  type,
  score,
}: {
  id: string;
  answer?: string | string[] | number[];
  ask?: string;
  type?: keyof typeof QUESTION_TYPES;
  score?: number;
}) => void;

export type Question = {
  _id: string;
  questionnarie?: Questionnaire | number;
  title: string;
  ask: string;
  options?: string[];
  score: number;
  type: keyof typeof QUESTION_TYPES;
  status?: 0 | 1;
} & (
  | {
      type: "checkbox" | "radio";
      answers?: number[];
    }
  | {
      type: "simple";
      answers?: string;
    }
  | {
      type: "complete";
      answers?: string[];
    }
);
