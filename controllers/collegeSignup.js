const bcrypt = require("bcrypt");
const College = require("../models/collegeModel");
const jwt = require("jsonwebtoken");

const collegeSignup = async (req, res) => {
    try {
        College.findOne({ collegeName: req.body.collegeName }).exec(async (error, user) => {
            if (user) {
                return res.status(301).json({
                    message: "College Already Exist, Try Signin"
                })
            }

            else if (error) {
                return res.status(501).json(error)
            }

            if (req.body.password == req.body.confirmpassword) {
                const newUser = new College({
                    collegeName: req.body.collegeName,
                    email: req.body.email,
                })

                const password = req.body.password;

                // now we set newUser password to hashed password
                newUser.hashPassword = await bcrypt.hash(password, 10);

                await newUser.save();
                const userPayload = { id: newUser._id };
                const accessToken = jwt.sign(userPayload, process.env.JWT_SECRET, {
                    expiresIn: '12h'
                });

                return res.status(200).json({
                    message: "College Registered",
                    accessToken
                });
            }
            else {
                return res.status(300).json({
                    message: "Password are not matching"
                })
            }

        })
    } catch (error) {
        return res.status(500).json({
            err
        });
    }
}

module.exports = collegeSignup;