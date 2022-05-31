const College = require("../models/collegeModel");

const getAllCollege = async (req, res) => {
    try {
        College.find().exec((err, result) => {
            if (err) {
                return res.status(301).json({
                    message: "No College Found",
                    err,
                });
            }
            var filterArr = result.map((college) => {
                const {description, hashPassword, ...others} = college._doc
                return others ; 
            })

            res.status(202).json(filterArr);
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

module.exports = getAllCollege;