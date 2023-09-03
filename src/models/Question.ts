import { QUESTION_TYPES } from "@/configs/consts/question.const";
import { Schema, model, models } from "mongoose";

const QuestionSchema = new Schema(
  {
    questionnarie: {
      type: Schema.Types.ObjectId,
      ref: "Questionnaire",
    },
    ask: String,
    options: [String],
    answers: [String],
    score: {
      type: Number,
      default: 0,
    },
    type: {
      type: String,
      enum: QUESTION_TYPES,
      default: QUESTION_TYPES.text,
    },
    status: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

const QuestionModel = models.QuestionModel || model("Question", QuestionSchema);

export default QuestionModel;
