const express = require("express");
const router = express.Router();

const authenticateToken = require("../middlewares/authenticateToken");
const addJob = require("../controllers/addJob");


router.post('/addJob', authenticateToken, addJob)

module.exports = router;