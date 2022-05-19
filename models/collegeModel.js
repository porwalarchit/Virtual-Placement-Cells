const mongoose = require("mongoose");

const CollegeSchema = new mongoose.Schema({
    collegeName:{
        type:String,
        required:[true, "Please Enter College Name"],
        unique:true,
    },

    email:{
        type:String,
        required:[true, "Please enter Email"],
        unique:true,
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
        type:"String",
    },

    
})

module.exports = mongoose.model('college', CollegeSchema);