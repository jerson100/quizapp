import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
  name: String,
  lastname: String,
  type: {
    type: String,
    enum: ["google", "github", "email"],
    default: "google",
  },
  image: String,
  status: {
    type: Number,
    default: 1,
  },
});

const UserModel = models.User || model("User", UserSchema);

export default UserModel;
