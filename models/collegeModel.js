const mongoose = require("mongoose");

const CollegeSchema = new mongoose.Schema({
    collegeName:{
        type:String,
        required:[true, "Please Enter College Name"],
        unique:[true, "College Name Already Exists"],
    },
    email:{
        type:String,
        required:[true, "Please enter Email"],
        unique:[true, "Email already Exists"],
    },
    hashPassword:{
        type:String,
        required:[true, "Please enter Password"],
    }, 
    profileImg:{
        type: String,
        default:"",
    },
    description:{
        type:String,
    }, 
})

module.exports = mongoose.model('college', CollegeSchema);