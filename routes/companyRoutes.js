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

const viewApplication = require("../controllers/viewApplication");
const acceptRejectApplication = require("../controllers/acceptRejectApplication");

router.post('/signup', validateCompanySignupRequest, isRequestValidated, companySignup);

router.post('/login', validateSigninRequest, isRequestValidated, companyLogin)

router.get('/profile', authenticateToken, getCompanyProfile);

router.patch('/update/profile', authenticateToken, upload.single("profileImg"), updateCompanyProfile);

router.post('/addJob', authenticateToken, addJob);

router.get('/viewJob', authenticateToken, getAllJobs);

router.delete('/deleteJob/:id', authenticateToken, deleteJob)

router.get('/getAllCollege', authenticateToken, getAllCollege);

router.get('/getAllCollege/placements/:id', authenticateToken, getAllCollegePlacements);

router.get('/searchCollege', authenticateToken, searchCollege);

// View All College Application API
router.get('/viewAppliedCollege', authenticateToken, viewApplication)

// Accept or Reject Application submitted by Colleges
router.post('/viewAppliedCollege/:id', authenticateToken, acceptRejectApplication)

module.exports = router;