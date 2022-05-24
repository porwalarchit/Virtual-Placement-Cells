const express = require("express");
const router = express.Router();
const authenticateToken = require("../middlewares/authenticateToken");
const upload = require("../utils/multer");

const addPlacement = require("../controllers/addPlacement");

router.post('/addPlacement', authenticateToken, upload.single("studentImage"), addPlacement);

module.exports = router;