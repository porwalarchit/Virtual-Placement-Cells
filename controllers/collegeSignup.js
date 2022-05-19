const bcrypt = require("bcrypt");
const College = require("../models/collegeModel");

module.exports =  collegeSignup = async (req, res) => {
    try {
        if (req.body.password == req.body.confirmpassword) {
            const newUser = new College({
                collegeName: req.body.collegeName,
                email: req.body.email,
            })

            const password = req.body.password;

            // now we set newUser password to hashed password
            newUser.hashPassword = await bcrypt.hash(password, 10);

            await new_User.save();
            return res.status(200).json({
                message: "User Registered"
            });
        }
        else {
            return res.status(300).json({
                message: "Password are not matching"
            })
        }
    } catch (error) {
        return res.status(501).json(error)
    }
}

