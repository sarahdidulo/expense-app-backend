import mongoose from "mongoose";
const {Schema, model} = mongoose;
const reqErrMsg = '*This is a required field.'

const expense = new Schema({
    name: {
        type: String,
        required: [true, reqErrMsg]
    }, 
    category : {
        type: String,
        required: [true, reqErrMsg]
    },  
    dateOfTransaction: {
        type: String,
        required: [false, reqErrMsg]
    },
    description: {
        type: String,
        required: [false, '']
    },
    transactor_id: { 
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Expense = model('Expense', expense);
export default Expense;