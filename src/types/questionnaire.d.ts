import { Question } from "./question";
import { User } from "./user";

export interface Questionnaire {
  _id?: string;
  title: string;
  createdBy?: User | number;
  status?: 0 | 1;
  startDate?: Date;
  endDate?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  questions?: Question[];
}
