const express = require("express");
const router = express.Router();

const authenticateToken = require("../middlewares/authenticateToken");
const addJob = require("../controllers/addJob");
const getAllCollege = require("../controllers/getAllCollege");
const getAllCollegePlacements = require("../controllers/getAllCollegePlacements");


router.post('/addJob', authenticateToken, addJob);

router.get('/getAllCollege', authenticateToken, getAllCollege);

router.get('/getAllCollege/:id/placements', authenticateToken, getAllCollegePlacements);

module.exports = router;