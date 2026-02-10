import Expense from "../models/Expense.js";
import User from "../models/User.js";

export const addExpense = async(req, res, next) => {
    try {
        const newExpense = await Expense.create(req.body);
        const user_transactor = await User.findOne({ _id: req.body.transactor_id}).populate('transactions').exec();
        console.log("user transactor", user_transactor);
        console.log("new expense", newExpense);
        user_transactor.transactions.push(newExpense);
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
