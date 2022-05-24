const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    jobName:{
        type:String,
        required:[true, "Please enter Job Name"],
    },
    jobDescription:{
        type:String,
        required:[true, "Please enter Job Description"],
    },
    jobRequirements:{
        type:String,
        required:[true, "Please enter Job Requriements"],
    },
    jobType:{
        type:String,
        required:[true, "Please enter Job Requriements"],
    },
    duration:{
        type:String,
        required:[true, "Please enter Duration of Job"],
    },
    jobPerks:{
        type: Array,
    },
    deadline:{
        type:Date,
    }
});

module.exports = mongoose.model("Job", jobSchema);