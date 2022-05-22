const express = require("express");
const router = express.Router();
const collegeSignup = require("../controllers/collegeSignup");
const collegeLogin = require("../controllers/collegeLogin");
const getCollegeProfile = require("../controllers/getCollegeProfile");
const updateCollegeProfile = require("../controllers/updateCollegeProfile");
const authenticateToken = require("../middlewares/authenticateToken");
const upload = require("../utils/multer");

router.post('/register', collegeSignup);

router.post('/login', collegeLogin);

router.get('/profile', authenticateToken, getCollegeProfile);

router.patch('/update/profile', authenticateToken, upload.single("profileImg"), updateCollegeProfile);

module.exports = router