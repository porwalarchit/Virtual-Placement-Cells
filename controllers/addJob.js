const Company = require("../models/companyModel");
const Job = require("../models/jobModel");

const addJob = async(req, res)=>{
    try {
        const company = await Company.findById(req.user.id);
        if (company) {
            const newJob = new Job({
                companyId: req.user.id,
                companyName: company.companyName,
                companyImg: company.profileImg,
                jobName: req.body.jobName,
                jobDescription: req.body.jobDescription,
                jobRequirements: req.body.jobRequirements,
                jobType: req.body.jobType,
                duration: req.body.duration,
                jobPerks: req.body.jobPerks,
                deadline: req.body.deadline
            })
    
            await newJob.save();
            return res.status(201).json({
                message:"Job Added Successfully"
            })
        } else {
            return res.status(301).json({
                message:"No Company Found"
            })
        }
        
    } catch (error) {
        return res.status(500).json({
            message: error.message.split(":")[2].trim()
        });
    }
}

module.exports = addJob;