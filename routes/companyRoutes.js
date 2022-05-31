const express = require("express");
const router = express.Router();

const authenticateToken = require("../middlewares/authenticateToken");
const { validateCompanySignupRequest, validateSigninRequest, isRequestValidated } = require("../middlewares/validator");

const companySignup = require("../controllers/companySignup");
const companyLogin = require("../controllers/companyLogin");
const getCompanyProfile = require("../controllers/getCompanyProfile");
const upload = require("../utils/multer");
const updateCompanyProfile = require("../controllers/updateCompanyProfile");

const addJob = require("../controllers/addJob");
const getAllJobs = require("../controllers/getAllJobs");
const getAllCollege = require("../controllers/getAllCollege");
const getAllCollegePlacements = require("../controllers/getAllCollegePlacements");
const deleteJob = require("../controllers/deleteJob");
const searchCollege = require("../controllers/searchCollege");

const viewapplication = require("../controllers/viewApplication");
const acceptRejectApplication = require("../controllers/acceptRejectApplication");

// Company Signup Route
router.post('/signup', validateCompanySignupRequest, isRequestValidated, companySignup);

// Company Login Route
router.post('/login', validateSigninRequest, isRequestValidated, companyLogin)

// Get Company Profile
router.get('/profile', authenticateToken, getCompanyProfile);

// Update Company Profile
router.patch('/update/profile', authenticateToken, upload.single("profileImg"), updateCompanyProfile);

// Add New Job Route
router.post('/addJob', authenticateToken, addJob);

// View Jobs
router.get('/viewJob', authenticateToken, getAllJobs);

// Delete Jobs posted by Company
router.delete('/deleteJob/:id', authenticateToken, deleteJob);

// Get all College
router.get('/getAllCollege', authenticateToken, getAllCollege);

// Get College Details by ID
router.get('/getAllCollege/placements/:id', authenticateToken, getAllCollegePlacements);

// Search College
router.get('/searchCollege', authenticateToken, searchCollege);

// View All College Application API
router.get('/viewAppliedCollege', authenticateToken, viewapplication);

// Accept or Reject Application submitted by Colleges
router.post('/viewAppliedCollege/:id', authenticateToken, acceptRejectApplication)

module.exports = router;