import { Question } from "./question";
import { User } from "./user";

export interface QuestionUser {
  user: User | number;
  question: Question | number;
  answer: string;
  createdat: Date;
  updatedat: Date;
  status: number;
}
