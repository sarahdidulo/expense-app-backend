import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";

import mainRouter from "./src/routes/index.js";

const app = express();

const PORT = 4000;

// mongoose.connect(process.env.MONGODB_URI).then(()=> {
//     console.log('Connected to database');
//     app.listen(4000, function () {
//         console.log(`Listening on PORT:${PORT}`);
//     });
// })  
// .catch (()=> {
//     console.log('Connection failed');
// })

try {
    mongoose.connection.on('connected', () => console.log('Database Connected'));
    await mongoose.connect(`${process.env.MONGODB_URI}/expense-tracker-db`);
    app.listen(4000, function () {
        console.log(`Listening on PORT:${PORT}`);
    });
} catch (err) {
    console.log(err);
    console.log("Connection failed");
}

// Enable CORS for the client origin
//changed - app.use(cors({ origin: "http://localhost:5173"}));
// origin: "http://127.0.0.1:5173"
// Use express.json() middleware to parse JSON request bodies
app.use(express.json());
app.use(cookieParser());
// app.use(cors({ credentials: true , origin: "http://localhost:5173"}))
// app.use(cors({ credentials: true , origin: "https://expense-tracker-app-phx9.onrender.com"}))

app.use(cors({ origin: `https://expense-tracker-app-sigma-ecru.vercel.app`}));
app.use('be-et/', mainRouter);


