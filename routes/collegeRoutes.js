const express = require("express");
const router = express.Router();
const authenticateToken = require("../middlewares/authenticateToken");
const upload = require("../utils/multer");

const addPlacement = require("../controllers/addPlacement");
const deletePlacement = require("../controllers/deletePlacement");

router.post('/addPlacement', authenticateToken, upload.single("studentImage"), addPlacement);

router.delete('/deletePlacement/:id', authenticateToken, deletePlacement);

router.get('/getAllCompany', authenticateToken, async(req, res)=>{
    try {
        
    } catch (error) {
        return res.status(500).json(error);
    }
})

module.exports = router;