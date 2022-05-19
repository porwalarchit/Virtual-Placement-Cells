const express = require("express");
const router = express.Router();
const collegeSignup = require("../controllers/collegeSignup");
// const bcrypt = require("bcrypt");
// const College = require("../models/collegeModel");
router.post('/register',  collegeSignup);

router.post('/login', async (req, res) => {
    try {

    } catch (error) {
        return res.status(501).json(error)
    }
    res.status(200).json("College Login Route")
})

module.exports = router