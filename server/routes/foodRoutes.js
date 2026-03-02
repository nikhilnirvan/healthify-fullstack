import express from "express";
import { addFood, getDailyFood, deleteFood } 
from "../controllers/foodController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, addFood);
router.get("/:userId/:date", protect, getDailyFood);
router.delete("/:id", protect, deleteFood);

export default router;