const College = require("../models/collegeModel");
const Placement = require("../models/placementModel");

const deletePlacement = async (req, res) => {
    try {
        College.findById(req.user.id).exec((err, user) => {
            if (err) {
                return res.status(401).json(err);
            }
            else if(user==null){
                return res.status(302).json({
                    message: "No College Found"
                })
            }
            Placement.findByIdAndDelete({ _id: req.params.id}).exec((err, result) => {
                if (err) {
                    return res.status(401).json(err);
                }
                else if (result == null) {
                    return res.status(301).json({
                        message: "No Student Found"
                    })
                }
                return res.status(201).json({
                    message: "Student Deleted",
                    result
                })
            })
        })
    }
    catch (error) {
        return res.status(500).json(error);
    }
}
module.exports = deletePlacement;