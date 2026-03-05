import express from "express";
import { userDetails, addProfileDetails } from "../controllers/userController.js";

const router = express.Router();

router.get("/user-details/:id", userDetails);
router.post("/add-profile-details/", addProfileDetails);
export default router;