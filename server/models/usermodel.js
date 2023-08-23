import mongoose, { Schema } from "mongoose";
const users = new Schema(
  {
    firstname: String,
    lastname: String,
    email: {
      type: String,
      unique: true,
      trim: true,
    },
    password: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", users);

export default User;
