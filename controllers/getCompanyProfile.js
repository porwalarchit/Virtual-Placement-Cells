const Company = require("../models/companyModel");

const getCompanyProfile = async (req, res) => {
    try {
        const company = req.user;
        const profile = await Company.findById(company.id);
        if (!profile) {
            return res.status(301).json({
                message: "No Company Profile Found"
            })
        }

        const{hashPassword, ...user} = profile._doc;
        return res.status(201).json({
            user
        })

    } catch (error) {
        return res.status(401).json({
            error
        })
    }
}

module.exports = getCompanyProfile; 