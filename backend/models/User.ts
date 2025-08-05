import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    default: "imageholder",
  },
  phone: {
    type: String,
  },
  birthdate: {
    type: Date,
  }
  
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;
