const bcrypt = require("bcrypt");
const Company = require("../models/companyModel");
const jwt = require("jsonwebtoken");

const companySignup = async (req, res) => {
    try {
        Company.findOne({ companyName: req.body.companyName }, async (err, user) => {
            if (user) {
                return res.status(302).json({
                    message: "Company Already Exist, Try Signin!!"
                })
            }

            else if (err) {
                return res.status(402).json(err);
            }

            if (req.body.password == req.body.confirmpassword) {
                const newUser = new Company({
                    companyName: req.body.companyName,
                    email: req.body.email,
                });

                const password = req.body.password;
                newUser.hashPassword = await bcrypt.hash(password, 10);

                await newUser.save();
                
                const userPayload = { id: newUser._id };
                const accessToken = jwt.sign(userPayload, process.env.JWT_SECRET, {
                    expiresIn: '12h'
                });

                return res.status(201).json({
                    message: "Company Registered",
                    accessToken
                })
            }
            else {
                return res.status(301).json({
                    message: "Passwords are not matching"
                })
            }
        })

    } catch (error) {
        return res.status(400).json({
            error
        })
    }
}

module.exports = companySignup;