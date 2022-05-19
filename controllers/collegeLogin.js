const bcrypt = require("bcrypt");
const College = require("../models/collegeModel");

const collegeLogin = async (req, res) => {
    try {
        College.findOne({ email: req.body.email }).exec(async (err, user) => {
            if (user) {
                const validPassword = await bcrypt.compare(req.body.password, user.hashPassword);
                if (validPassword) {
                    return res.status(201).json({
                        message: "Login Successful",
                        user
                    });
                } else {
                    return res.status(401).json({ error: "Invalid Login Credentials" });
                }
            } else {
                return res.status(301).json({
                    message: "User doesn't exist",
                });
            }
        })

    } catch (error) {
        return res.status(501).json(error)
    }
}

module.exports = collegeLogin;