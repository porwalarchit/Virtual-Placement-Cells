const Company = require("../models/companyModel");
const Job = require("../models/jobModel");

const deleteJob = async (req, res) => {
    try {
        Company.findById(req.user.id).exec((err, user) => {
            if (err) {
                return res.status(401).json(err);
            }
            else if(user == null){
                return res.status(301).json({
                    message:"No Company Found",
                })
            }
            Job.findByIdAndDelete({_id: req.params.id}).exec((err, result)=>{
                if(err){
                    return res.status(401).json(err);
                }
                else if(result==null){
                    return res.status(301).json({
                        message:"No Job Found",
                    })
                }
                return res.status(202).json({
                    message:"Job Deleted",
                    result
                })
            })
        })
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = deleteJob;