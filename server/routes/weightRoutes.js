import express from "express";
import { addWeight, getWeights } from "../controllers/weightController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, addWeight);
router.get("/:userId", protect, getWeights);

export default router;