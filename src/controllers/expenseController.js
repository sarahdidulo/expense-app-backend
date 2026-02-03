import Expense from "../models/Expense.js";

export const addExpense = async(req, res, next) => {
    try {
        const newExpense = await Expense.create(req.body);
        res.send(newExpense);
    } catch (err) {
        res.status(400).send(`ERROR: ${err}`);
    }
}

export const getAllTransactions = async(req, res, next) => {
    try {
        const allTransactions = await Expense.find();
        res.send(allTransactions);
    } catch (err) {
        res.status(400).send(`ERROR: ${err}`);
    }
}
