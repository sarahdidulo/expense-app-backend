//NOT BEING USED. added this code in the index.js instead
import mongoose from "mongoose";

//check if error is working

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log('Database Connected'));
        await mongoose.connect(`${process.env.MONGODB_URI}/expense-tracker-db`)
        // await mongoose.connect(process.env.MONGODB_URI);
        // console.log('Connected to database');
    } catch (err) {
        console.log(err);
        console.log("Connection failed");
    }
}

export default connectDB;