const Company = require("../models/companyModel");
const Job = require("../models/jobModel");

const getAllJobs = (req, res) => {
    try {
        Company.findById(req.user.id).exec((err, company) => {
            if (err) {
                return res.status(401).json(err)
            }
            else if (company == null) {
                return res.status(303).json({
                    message: "No Company Found",
                })
            }
            else{
                Job.find({companyId: company._id }).exec((err, jobs)=>{
                    if(err){
                        return res.status(401).json(err);
                    }
                    else if(JSON.stringify(jobs) === "[]") {
                        return res.status(302).json({
                            message: "No Jobs Posted"
                        })
                    }
                    else{
                        return res.status(202).json({
                            jobs
                        })
                    }
                })
            }
        })
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = getAllJobs;