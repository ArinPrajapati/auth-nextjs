import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "please enter the user name"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "please enter the email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "please enter password"],
  },
  isVerified: {
    type: Boolean,
    default: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;