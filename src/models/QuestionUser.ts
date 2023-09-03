import { Schema, model, models } from "mongoose";

const QuestionUserSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    question: {
      type: Schema.Types.ObjectId,
      ref: "Question",
    },
    answer: [String],
  },
  {
    timestamps: true,
  }
);

const QuestionUserModel =
  models.QuestionUserModel || model("QuestionUser", QuestionUserSchema);

export default QuestionUserModel;
