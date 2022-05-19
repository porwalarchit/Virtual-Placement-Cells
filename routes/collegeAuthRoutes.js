const express = require("express");
const router = express.Router();

const College = require("../models/collegeModel");

router.post('/register', (req, res)=>{
    res.status(200).json("College SignUp Route")
})

router.post('/login', (req, res)=>{
    res.status(200).json("College Login Route")
})

module.exports = router