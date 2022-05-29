const bcrypt = require("bcrypt");
const College = require("../models/collegeModel");
const jwt = require("jsonwebtoken");


const collegeLogin = async (req, res) => {
    try {
        College.findOne({ email: req.body.email }).exec(async (err, user) => {
            if (user) {
                const validPassword = await bcrypt.compare(req.body.password, user.hashPassword);
                if (validPassword) {
                    // Setting up jwt access token while logging in.
                    const userPayload = {id: user._id};
                    const accessToken = jwt.sign(userPayload, process.env.JWT_SECRET, {
                         expiresIn: '12h' 
                    });

                    return res.status(201).json({
                        message: `Login Successful`,
                        accessToken,
                    });
                } else {
                    return res.status(401).json({ error: "Invalid Login Credentials" });
                }
            } else {
                return res.status(301).json({
                    message: "College doesn't exist",
                });
            }
        })
    } catch (error) {
        return res.status(501).json(error)
    }
}

module.exports = collegeLogin;