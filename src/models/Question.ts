import { Schema, model, models } from "mongoose";

const QuestionSchema = new Schema(
  {
    title: String,
    ask: String,
    options: [String],
    answers: [String],
    type: {
      type: Number,
      enum: ["text", "radio", "checkbox"],
      default: 1,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
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
