import express from "express";
import { userDetails } from "../controllers/userController.js";

const router = express.Router();

router.get("/user-details", userDetails)

export default router;