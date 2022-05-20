const College = require("../models/collegeModel");

const getCollegeProfile = async(req, res)=>{
    try {
        const profile = await College.findOne(req.user._id);
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
        return res.status.json({
            error
        })
    }
}

module.exports = getCollegeProfile;