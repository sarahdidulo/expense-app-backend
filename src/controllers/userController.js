import User from "../models/User.js";

export const userDetails = async (req, res, next) => {
    const user_details = await User.find({});
    res.json(user_details);
};