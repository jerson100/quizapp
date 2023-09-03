import { Schema, model, models, Document, Types, Model } from "mongoose";
import { UserQuestionnaireStatus } from "@/configs/consts/userQuestionnaire.const";

interface UserQuestionnaireDocument extends Document {
  user: Types.ObjectId;
  questionnaire: Types.ObjectId;
  status: (typeof UserQuestionnaireStatus)[keyof typeof UserQuestionnaireStatus];
  createdAt: Date;
  updatedAt: Date;
  start_date: Date;
  end_date: Date;
}

const UserQuestionnaireSchema = new Schema<UserQuestionnaireDocument>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    questionnaire: {
      type: Schema.Types.ObjectId,
      ref: "Questionnaire",
      required: true,
    },
    start_date: {
      type: Date,
      default: Date.now,
    },
    end_date: Date,
    status: {
      type: Number,
      enum: Object.values(UserQuestionnaireStatus),
      default: UserQuestionnaireStatus.USER_QUESTIONNAIRE_NOT_STARTED,
    },
  },
  {
    timestamps: true,
  }
);

const UserQuestionnaireModel =
  models.UserQuestionnaireModel ||
  model<UserQuestionnaireDocument>(
    "UserQuestionnaire",
    UserQuestionnaireSchema
  );

export default UserQuestionnaireModel;
