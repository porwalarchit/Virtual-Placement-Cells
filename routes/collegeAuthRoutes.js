const express = require("express");
const router = express.Router();
const collegeSignup = require("../controllers/collegeSignup");
const collegeLogin = require("../controllers/collegeLogin");

router.post('/register', collegeSignup);

router.post('/login', collegeLogin);

module.exports = router