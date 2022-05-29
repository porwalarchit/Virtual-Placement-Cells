const mongoose = require("mongoose");

const CollegeSchema = new mongoose.Schema({
    collegeName:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type:String,
        required: true,
        unique: true,
    },
    hashPassword:{
        type:String,
        required: true,
    }, 
    profileImg:{
        type: String,
        default:"",
    },
    description:{
        type:String,
    }, 
    website:{
        type: String,
        default: ""
    }
})

module.exports = mongoose.model('college', CollegeSchema);