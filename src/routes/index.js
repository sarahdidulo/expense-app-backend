import express from "express";
import userRoutes from "./userRoutes.js";
import expenseRoutes from "./expenseRoutes.js";
import authRoutes from "./authRoutes.js";

const mainRouter = express.Router();

mainRouter.use('/auth/', authRoutes);
mainRouter.use('/user/', userRoutes);
mainRouter.use('/transactions/', expenseRoutes);

// module.exports = router;
export default mainRouter;