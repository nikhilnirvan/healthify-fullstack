import FoodEntry from "../models/FoodEntry.js";

export const addFood = async (req, res) => {
  try {
    const food = await FoodEntry.create(req.body);
    res.status(201).json(food);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getDailyFood = async (req, res) => {
  const { userId, date } = req.params;

  const start = new Date(date);
  const end = new Date(date);
  end.setHours(23, 59, 59);

  const foods = await FoodEntry.find({
    userId,
    date: { $gte: start, $lte: end }
  });

  res.json(foods);
};

export const deleteFood = async (req, res) => {
  try {
    await FoodEntry.findByIdAndDelete(req.params.id);
    res.json({ message: "Food deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};