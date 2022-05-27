const Company = require("../models/companyModel");

const getAllCompany = async(req, res)=>{
    try {
        Company.find().exec((err, result)=>{
            if(err){
                return res.status(401).json({
                    err
                })
            }
            const filteredArr = result.map((company)=>{
                const {hashPassword, ...others} =company._doc
                return others
            })
            return res.status(202).json({
                filteredArr
            })
        })
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = getAllCompany;