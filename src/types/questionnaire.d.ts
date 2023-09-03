import { Question } from "./question";
import { User } from "./user";

export interface Questionnaire {
  title: string;
  createdBy?: User | number;
  timeLimit?: number;
  status: 0 | 1;
  createdAt: Date;
  updatedAt: Date;
}
