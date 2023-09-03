import { Schema, model, models } from "mongoose";

const QuestionnaireSchema = new Schema(
  {
    title: String,
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    status: {
      type: Number,
      default: 1,
    },
    timeLimit: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const QuestionnaireModel =
  models.QuestionnaireModel || model("Questionnaire", QuestionnaireSchema);

export default QuestionnaireModel;
