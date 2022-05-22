const College = require("../models/collegeModel");

const getCollegeProfile = async(req, res)=>{
    try {
        const college = req.user;
        const profile = await College.findById(college.id);
        if(!profile){
            return res.status(301).json({
                message:"No College Profile Found",
            })
        }

        const {hashPassword, ...user} = profile._doc;
        return res.status(201).json({
            user
        })
    
    } catch (error) {
        return res.status(401).json({
            error
        })
    }
}

module.exports = getCollegeProfile;