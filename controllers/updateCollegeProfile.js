const College = require("../models/collegeModel");
const imagekit = require("../utils/imagekit");

const updateCollegeProfile = async (req, res) => {
    try {
        imagekit.upload({
            file: req.file.path,
            folder: 'College_Images',
            fileName: req.file.originalname,
        }, async (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: "An error occured during file upload. Please try again."
                })
            }
            const college = req.user;
            const updateUser = await College.findByIdAndUpdate(college.id, { description: req.body.description, profileImg: result.url }, {
                new: true,
                runValidators: true
            });

            if (!updateUser) {
                return res.status(301).json({
                    message: "No College Found"
                });
            }

            // await updateUser.save();
            const { hashPassword, ...others } = updateUser._doc;

            return res.status(202).json({
                message: "College Update Profile",
                others
            })
        });
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            error
        })
    }
}

module.exports = updateCollegeProfile;