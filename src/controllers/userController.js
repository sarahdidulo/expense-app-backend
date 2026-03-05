import User from "../models/User.js";

export const userDetails = async (req, res, next) => {
    const user_id = req.params.id;
    const user_details = await User.findById(user_id);
    console.log(user_details)
    res.send(user_details);
}

export const addProfileDetails = async (req, res, next) => {
    try {
        console.log("add profile details")
        const firstname = req.body.firstname;
        const middlename = req.body.middlename;
        const lastname = req.body.lastname;
        const email = req.body.email;
        await User.findOne({email}).updateOne({firstname: firstname, middlename: middlename, lastname: lastname});
        const user = await User.findOne({email});
        res.send({success: true, data: user});

    } catch(err) {
        res.send({success: false, error: err});
    }
    
}