const appliedCollege = require("../models/appliedCollege");
const acceptedRejectedCollege = require("../models/acceptedRejectedCollege");

const acceptRejectApplication = async (req, res) => {
    try {
        appliedCollege.findById(req.params.id).exec(async (err, result) => {
            if (err) {
                return res.status(401).json(err);
            }
            else if (result == null) {
                return res.status(301).json({
                    message: "No application found with given id",
                })
            }
            const new_application = new acceptedRejectedCollege({
                collegeId: result.collegeId,
                jobId: result.jobId,
                collegeName: result.collegeName,
                companyId: result.companyId,
                companyName: result.companyName,
                jobName: result.jobName,
                status: req.body.status
            })
            if (new_application.status === "Accepted" || new_application.status === "Rejected") {
                await new_application.save();
                await appliedCollege.deleteOne({ _id: req.params.id });
            }
            return res.status(201).json({
                new_application
            });
        })
    } catch (error) {
        return res.status(501).json(error)
    }
}

module.exports = acceptRejectApplication;