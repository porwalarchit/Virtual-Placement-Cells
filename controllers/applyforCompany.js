const appliedCollege = require("../models/appliedCollege");
const Job = require("../models/jobModel");
const college = require("../models/collegeModel");

const applyforCompany = async (req, res) => {
    try {
        appliedCollege.findOne({ jobId: req.params.jobid }).exec(async (err, job) => {
            if (err) {
                return res.status(401).json(err)
            }
            else if (job) {
                return res.status(301).json({
                    message: "Already applied, check status from Status tab !!"
                })
            }
            const College = await college.findById(req.user.id);
            const Company = await Job.findById(req.params.jobid);

            const new_college = new appliedCollege({
                collegeId: req.user.id,
                jobId: req.params.jobid,
                collegeName: College.collegeName,
                companyId: Company.companyId,
                companyName: Company.companyName,
                jobName: Company.jobName
            })

            await new_college.save();
            return res.status(201).json({
                message: "Application Submitted",
                new_college
            })
        })
    } catch (error) {
        return res.status(500).json(error);
    }
}


module.exports = applyforCompany