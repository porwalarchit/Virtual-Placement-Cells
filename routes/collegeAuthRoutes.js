const express = require("express");
const router = express.Router();
const collegeSignup = require("../controllers/collegeSignup");

router.post('/register', collegeSignup);

router.post('/login', (req, res) => {
    res.status(200).json("College Login Route")
})

module.exports = router