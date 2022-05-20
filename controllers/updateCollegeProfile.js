const College = require("../models/collegeModel");

const updateCollegeProfile = async(req, res) =>{
    try {
        const updateUser = await College.findOneAndUpdate(req.user._id, req.body ,{
            new:true,
            runValidators:true
        });
        if(!updateUser){
            return res.status(301).json({
                message:"No College Found"
            });
        }

        const {hashPassword, ...others} = updateUser._doc ; 

        return res.status(202).json({
            message: "College Update Profile",
            others
        })
    
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            error
        })
    }
}

module.exports = updateCollegeProfile;