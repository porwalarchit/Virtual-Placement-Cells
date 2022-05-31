const College = require("../models/collegeModel");

const searchCollege = (req, res) => {
    try {
        College.find(req.query).exec((err, result) => {
            if (err) {
                return res.status(401).json(err);
            }
            else if (JSON.stringify(result) == "[]") {
                return res.status(301).json({
                    message: "No College Found",
                })
            }
            const filteredArr = result.map((college) => {
                const { hashPassword, description, ...others } = college._doc;
                return others
            })
            return res.status(202).json({
                filteredArr
            })
        })
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = searchCollege