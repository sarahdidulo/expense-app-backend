import express from "express";
import { addExpense, getAllTransactions, filterTransactions } from "./../controllers/expenseController.js";

const router = express.Router();

router.post('/add-expense/', addExpense);
router.get('/all/:id', getAllTransactions);
router.get('/all/:id/:month/:year', filterTransactions);

export default router;