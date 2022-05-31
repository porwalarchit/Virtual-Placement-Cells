const express = require("express");
const router = express.Router();

const authenticateToken = require("../middlewares/authenticateToken");
const {validateCollegeSignupRequest, validateSigninRequest, isRequestValidated} = require("../middlewares/validator");

const collegeSignup = require("../controllers/collegeSignup");
const collegeLogin = require("../controllers/collegeLogin");
const getCollegeProfile = require("../controllers/getCollegeProfile");
const upload = require("../utils/multer");
const updateCollegeProfile = require("../controllers/updateCollegeProfile");

const addPlacement = require("../controllers/addPlacement");
const getAllPlacements = require("../controllers/getAllPlacements");
const deletePlacement = require("../controllers/deletePlacement");
const getAllCompany = require("../controllers/getAllCompany");
const getAllCompanyJobs = require("../controllers/getAllCompanyJobs");
const searchCompany = require("../controllers/searchCompany");
const applyforCompany = require("../controllers/applyforCompany");
const appliedJobs = require("../controllers/viewAppliedJobs");

router.post('/register', validateCollegeSignupRequest, isRequestValidated, collegeSignup);

router.post('/login', validateSigninRequest, isRequestValidated, collegeLogin);

router.get('/profile', authenticateToken, getCollegeProfile);

router.patch('/update/profile', authenticateToken, upload.single("profileImg"), updateCollegeProfile);

router.post('/addPlacement', authenticateToken, upload.single("studentImage"), addPlacement);

router.get('/viewPlacement', authenticateToken, getAllPlacements);

router.delete('/deletePlacement/:id', authenticateToken, deletePlacement);

router.get('/getAllCompany', authenticateToken, getAllCompany);

router.get('/getAllCompanyJobs', authenticateToken, getAllCompanyJobs);

router.get('/searchCompany', authenticateToken, searchCompany);

router.post('/applyforCompany/:jobid', authenticateToken, applyforCompany);

router.get('/appliedJobs', authenticateToken, appliedJobs);

module.exports = router;