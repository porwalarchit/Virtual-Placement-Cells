const Job = require("../models/jobModel");

const getAllCompanyJobs = (req, res) => {
    try {
        Job.find().exec((err, jobs) => {
            if (err) {
                return res.status(401).json(err)
            }
            else if (JSON.stringify(jobs) == "[]") {
                return res.status(303).json({
                    message: "No Jobs Found",
                })
            }
            return res.status(201).json(
                jobs
            )
        })
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = getAllCompanyJobs;