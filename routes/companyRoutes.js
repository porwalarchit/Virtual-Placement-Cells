const express = require("express");
const router = express.Router();

const authenticateToken = require("../middlewares/authenticateToken");

const companySignup = require("../controllers/companySignup");
const companyLogin = require("../controllers/companyLogin");
const getCompanyProfile = require("../controllers/getCompanyProfile");
const updateCompanyProfile = require("../controllers/updateCompanyProfile");
const addJob = require("../controllers/addJob");
const getAllCollege = require("../controllers/getAllCollege");
const getAllCollegePlacements = require("../controllers/getAllCollegePlacements");
const upload = require("../utils/multer");


router.post('/signup', companySignup);

router.post('/login', companyLogin)

router.get('/profile', authenticateToken, getCompanyProfile);

router.patch('/update/profile', authenticateToken, upload.single("profileImg"),updateCompanyProfile);

router.post('/addJob', authenticateToken, addJob);

router.get('/getAllCollege', authenticateToken, getAllCollege);

router.get('/getAllCollege/placements/:id', authenticateToken, getAllCollegePlacements);

module.exports = router;