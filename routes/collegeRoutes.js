const express = require("express");
const router = express.Router();

const authenticateToken = require("../middlewares/authenticateToken");

const collegeSignup = require("../controllers/collegeSignup");
const collegeLogin = require("../controllers/collegeLogin");
const getCollegeProfile = require("../controllers/getCollegeProfile");
const updateCollegeProfile = require("../controllers/updateCollegeProfile");
const addPlacement = require("../controllers/addPlacement");
const deletePlacement = require("../controllers/deletePlacement");
const getAllCompany = require("../controllers/getAllCompany");
const upload = require("../utils/multer");


router.post('/register', collegeSignup);

router.post('/login', collegeLogin);

router.get('/profile', authenticateToken, getCollegeProfile);

router.patch('/update/profile', authenticateToken, upload.single("profileImg"), updateCollegeProfile);

router.post('/addPlacement', authenticateToken, upload.single("studentImage"), addPlacement);

router.delete('/deletePlacement/:id', authenticateToken, deletePlacement);

router.get('/getAllCompany', authenticateToken, getAllCompany);


const Company = require("../models/companyModel");
const Job = require("../models/jobModel");

router.get('/jobs/:id', (req, res) => {
    try {
        Company.findById(req.params.id).exec((err, company) => {
            if (err) {
                return res.status(401).json(err)
            }
            else if (company == null) {
                return res.status(301).json({
                    message: "No Company Found with given id",
                })
            }
            Job.find({ companyId: company._id }).exec((err, result) => {
                if (err) {
                    return res.status(302).json(err)
                }
                else if (JSON.stringify(result) == "[]") {
                    return res.status(303).json({
                        message: "No Jobs Found",
                    })
                }
                console.log(typeof tmp);
                return res.status(201).json(
                    result
                )
            })
        })
    } catch (error) {
        return res.status(500).json(error)
    }
})

module.exports = router;