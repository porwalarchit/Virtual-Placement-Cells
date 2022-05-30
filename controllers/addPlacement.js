const cloudinary = require("../utils/cloudinary");

const College = require("../models/collegeModel");
const Placement = require("../models/placementModel");

const addPlacement = async (req, res) => {
    try {
        const collegeDetails = await College.findById(req.user.id);
        if (collegeDetails) {
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: 'Placement_Images',
                use_filename: true
            });

            const newPlacement = new Placement({
                collegeId: req.user.id,
                studentName: req.body.studentName,
                company: req.body.company,
                profile: req.body.profile,
                package: req.body.package,
                studentImage: result.url
            });

            await newPlacement.save();
            return res.status(200).json({
                message: "Placement Updated",
                newPlacement
            })
        }
        else {
            return res.status(301).json({
                message: "No College Found"
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message.split(":")[2].trim()
        });
    }
}

module.exports = addPlacement;