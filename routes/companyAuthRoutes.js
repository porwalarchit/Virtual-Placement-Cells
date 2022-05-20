const express = require("express");
const router = express.Router();
const companySignup = require("../controllers/companySignup");

router.post('/signup', companySignup)

router.post('/login', (req, res) => {
    res.status(200).send("Company Login Route");
})

module.exports = router;