const Company = require("../models/companyModel");
const Job = require("../models/jobModel");

const getAllCompanyJobs = (req, res) => {
    try {
        Company.findById(req.params.id).exec((err, company) => {
            if (err) {
                return res.status(401).json(err)
            }
            else if (company == null) {
                return res.status(301).json({
                    message: "No Company Found with given id",
                })
            }
            Job.find({ companyId: company._id }).exec((err, result) => {
                if (err) {
                    return res.status(302).json(err)
                }
                else if (JSON.stringify(result) == "[]") {
                    return res.status(303).json({
                        message: "No Jobs Found",
                    })
                }
                console.log(typeof tmp);
                return res.status(201).json(
                    result
                )
            })
        })
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = getAllCompanyJobs;