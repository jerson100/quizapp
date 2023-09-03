import { QUESTION_TYPES } from "@/configs/consts/question.const";
import { Questionnaire } from "./questionnaire";
import { User } from "./user";

export interface Question {
  questionnarie: Questionnaire | number;
  title: string;
  ask: string;
  options: string[] | undefined;
  answers: string[] | string | undefined;
  createdBy: User | number;
  score: number;
  type: keyof typeof QUESTION_TYPES;
  status: 0 | 1;
}
