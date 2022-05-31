const appliedCollege = require("../models/appliedCollege");

const viewApplication = (req, res) => {

    try {
        appliedCollege.find({ companyId: req.user.id }).exec((err, user) => {
            if (err) {
                return res.status(401).json(err);
            }
            else if (JSON.stringify(user) == "[]") {
                return res.status(301).json({
                    message: "No College Applied"
                })
            }
            return res.status(201).json({
                user
            })
        })
    } catch (error) {
        return res.status(501).json(error);
    }
}

module.exports = viewApplication