import Expense from "../models/Expense.js";
import User from "../models/User.js";

export const addExpense = async(req, res, next) => {
    try {
        
        const newExpense = await Expense.create(req.body);
        newExpense.dateOfTransaction = new Date(req.body.dateOfTransaction);
        await newExpense.save();
        const user_transactor = await User.findOne({ _id: req.body.transactor_id}).populate('transactions');
        console.log("user transactor", user_transactor);
        console.log("new expense", newExpense);
        user_transactor.transactions.push(newExpense);
        user_transactor.save();
        res.json({success: true, expense_data: user_transactor});
    } catch (err) { 
        res.status(400).send(`ERROR: ${err}`);
    }
}

export const getAllTransactions = async(req, res, next) => {
    try {
        const userTransactions = await User.findOne({_id: req.params.id}).populate('transactions').exec();
        res.send(userTransactions.transactions);
    } catch (err) {
        res.status(400).send(`ERROR: ${err}`);
    }
}

function convertTransactionDate (transaction_date) {
    const converted_transaction_date = new Date(transaction_date);
    let month = converted_transaction_date.getMonth() + 1;
    let day = converted_transaction_date.getDate();
    if(month.toString().length === 1) {
        month = `0` + month.toString();
    }
    if(day.toString().length === 1) {
        day = `0` + day.toString();
    }
    return `${converted_transaction_date.getFullYear()}` + `-` + `${month}` + `-${day}`;
}

export const filterTransactions = async(req, res, next) => {
    try {
        const category = req.params.category;
        const user_id = req.params.id;
    
        const transactions = await Expense.where('transactor_id', user_id)
            .where('category', category)
            .exec();
        res.send(transactions);
    } catch (err) {
        res.status(400).send(`ERROR: ${err}`);
    }
}