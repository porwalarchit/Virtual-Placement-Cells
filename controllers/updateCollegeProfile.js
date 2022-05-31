const College = require("../models/collegeModel");
const cloudinary = require("../utils/cloudinary");

const updateCollegeProfile = async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: 'College_Images',
            use_filename: true
        });
        
        const college = req.user;
        const updateUser = await College.findByIdAndUpdate(college.id, { 
            description: req.body.description, 
            website: req.body.website, 
            profileImg: result.url 
        }, {
            new: true,
            runValidators: true
        });

        if (!updateUser) {
            return res.status(301).json({
                message: "No College Found"
            });
        }

        const { hashPassword, ...others } = updateUser._doc;
        return res.status(202).json({
            message: "Profile Updated Successfully",
            others
        })
    } catch (error) {
        return res.status(401).json({
            error
        })
    }
}

module.exports = updateCollegeProfile;