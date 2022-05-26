const bcrypt = require("bcrypt");
const Company = require("../models/companyModel");
const jwt = require("jsonwebtoken");

const companyLogin = async (req, res) => {
    try {
        Company.findOne({ email: req.body.email }).exec(async (err, user) => {
            if (user) {
                const validPassword = await bcrypt.compare(req.body.password, user.hashPassword);

                const userPayload = {id: user._id};
                const accessToken = jwt.sign(userPayload, process.env.JWT_SECRET, {
                    expiresIn:'12h'
                })

                if (validPassword) {
                    return res.status(201).json({
                        message: `Hey ${user.companyName}, Welcome to Virtual Placement Cell.`,
                        accessToken
                    })
                }
                else {
                    return res.status(302).json({
                        message: "Invalid Login Credentials",
                    })
                }
            }

            else {
                return res.status(301).json({
                    message: "Company doesn't exist",
                });
            }
        });
    } catch (error) {
        return res.status(400).json({
            err,
        });
    }

}

module.exports = companyLogin;