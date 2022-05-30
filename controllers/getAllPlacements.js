const College = require("../models/collegeModel");
const Placement = require("../models/placementModel");

const getAllPlacements = async (req, res) => {
    try {
        College.findById(req.user.id).exec(async (err, result) => {
            if (err) {
                return res.status(301).json({
                    error
                })
            }
            else if (result == null) {
                return res.status(301).json({
                    message: "No College Found with given ID"
                })
            }
            else {
                Placement.find({ collegeId: result._id }).exec((err, placementDetails) => {
                    if (err) {
                        return res.status(301).json(err);
                    }
                    else if (JSON.stringify(placementDetails) === "[]") {
                        return res.status(302).json({
                            message: "No Placement Record"
                        })
                    }
                    return res.status(201).json(
                        placementDetails
                    )
                })
            }
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

module.exports = getAllPlacements