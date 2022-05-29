const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    companyName:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    hashPassword:{
        type:String,
        required:true,
    },
    profileImg:{
        type: String,
        default:"",
    },
    description:{
        type:String,
        default:"",
    },
    website:{
        type: String,
        default: ""
    }
})

module.exports = mongoose.model("Company", companySchema);