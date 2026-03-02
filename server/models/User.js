import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  age: Number,
  height: Number,
  weight: Number,
  goal: {
    type: String,
    enum: ["cut", "bulk", "maintain"]
  },
  calorieTarget: Number,
  proteinTarget: Number
}, { timestamps: true });

export default mongoose.model("User", userSchema);