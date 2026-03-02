import WeightEntry from "../models/WeightEntry.js";

export const addWeight = async (req, res) => {
  try {
    const weight = await WeightEntry.create(req.body);
    res.status(201).json(weight);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getWeights = async (req, res) => {
  const { userId } = req.params;
  const weights = await WeightEntry.find({ userId }).sort({ date: 1 });
  res.json(weights);
};