const Company = require("../models/companyModel");
const imagekit = require("../utils/imagekit");

const updateCompanyProfile = async (req, res) => {
    try {
        imagekit.upload({
            file: req.file.path,
            folder: 'Companies_Images',
            fileName: req.file.originalname,
        }, async (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: "An error occured during file upload. Please try again."
                })
            }
            const company = req.user;
            const updatedProfile = await Company.findByIdAndUpdate(company.id, { description: req.body.description, profileImg: result.url }, {
                new: true,
                runValidators: true
            });

            if (!updatedProfile) {
                return res.status(301).json({
                    message: "No Company Found",
                })
            }

            const { hashPassword, ...user } = updatedProfile._doc;
            return res.status(202).json({
                message: "Profile Updated Successfully",
                user
            })
        })

    } catch (error) {
        console.log(error);
        return res.status(401).json({
            error
        })
    }
}

module.exports = updateCompanyProfile