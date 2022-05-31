const appliedCollege = require("../models/appliedCollege");
const acceptedRejectedCollege = require("../models/acceptedRejectedCollege");

const appliedJobs = async(req, res) => {
    const clg = await acceptedRejectedCollege.find({collegeId: req.user.id});

    appliedCollege.find({collegeId: req.user.id}).exec((err, user) => {
        if (err) {
            return res.status(401).json(err);
        }
        else if(JSON.stringify(user)=="[]" || JSON.stringify(clg)=="[]"){
            return res.status(301).json({
                message:"No Jobs Applied"
            })
        }
        return res.status(201).json({
            clg, 
            user
        })
    })
}

module.exports = appliedJobs