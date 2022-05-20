const express = require("express");
const router = express.Router();
const companySignup = require("../controllers/companySignup");
const companyLogin = require("../controllers/companyLogin");


router.post('/signup', companySignup);

router.post('/login', companyLogin)

module.exports = router;