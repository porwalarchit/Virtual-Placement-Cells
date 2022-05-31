const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    companyId:{
        type: String,
        require:[true, "Please enter Company Id"],
    },
    companyName:{
        type: String,
        require: [true, "Please Enter Company Name"]
    },
    companyImg:{
        type: String,
    },
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
    jobQualifications:{
        type:String,
    },
    jobType:{
        type:String,
    },
    duration:{
        type:String,
    },
    jobPerks:{
        type: [{
            type:String
        }],
    },
    deadline:{
        type:String,
    }
});

module.exports = mongoose.model("Job", jobSchema);