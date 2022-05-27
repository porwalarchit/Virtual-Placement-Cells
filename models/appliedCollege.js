const mongoose = require("mongoose");

const appliedCollege = new mongoose.Schema({
    collegeId:{
        type: String,
        required: true,
    },
    collegeName:{
        type: String
    },
    companyId:{
        type: String,
        required: true,
    },
    companyName:{
        type: String,
        required: true,
    },
    jobId:{
        type: String,
        required: true,
    },
    jobName:{
        type: String,
        required: true,
    },
    status:{
        type:String,
        default:"Pending",
    }
});

module.exports = mongoose.model("Applied College", appliedCollege);