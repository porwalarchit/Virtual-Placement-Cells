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
const Company = require("../models/companyModel");


router.post('/register', collegeSignup);

router.post('/login', collegeLogin);

router.get('/profile', authenticateToken, getCollegeProfile);

router.patch('/update/profile', authenticateToken, upload.single("profileImg"), updateCollegeProfile);

router.post('/addPlacement', authenticateToken, upload.single("studentImage"), addPlacement);

router.delete('/deletePlacement/:id', authenticateToken, deletePlacement);

router.get('/getAllCompany', authenticateToken, getAllCompany);

module.exports = router;