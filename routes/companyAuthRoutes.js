const express = require("express");
const router = express.Router();
const companySignup = require("../controllers/companySignup");
const companyLogin = require("../controllers/companyLogin");
const getCompanyProfile = require("../controllers/getCompanyProfile");
const updateCompanyProfile = require("../controllers/updateCompanyProfile");
const authenticateToken = require("../middlewares/authenticateToken");
const upload = require("../utils/multer");

router.post('/signup', companySignup);

router.post('/login', companyLogin)

router.get('/profile', authenticateToken, getCompanyProfile);

router.patch('/update/profile', authenticateToken, upload.single("profileImg"),updateCompanyProfile);

module.exports = router;