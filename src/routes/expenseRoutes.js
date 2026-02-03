import express from "express";
import { addExpense, getAllTransactions } from "./../controllers/expenseController.js";

const router = express.Router();

router.post('/add-expense/', addExpense);
router.get('/all/', getAllTransactions);

export default router;