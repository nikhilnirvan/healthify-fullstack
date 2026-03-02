import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  date: {
    type: Date,
    default: Date.now
  },
  foodName: String,
  quantity: Number,
  calories: Number,
  protein: Number,
  carbs: Number,
  fat: Number
});

export default mongoose.model("FoodEntry", foodSchema);