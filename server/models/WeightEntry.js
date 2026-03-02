import mongoose from "mongoose";

const weightSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  date: {
    type: Date,
    default: Date.now
  },
  weight: Number
});

export default mongoose.model("WeightEntry", weightSchema);