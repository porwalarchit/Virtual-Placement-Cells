const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    companyName:{
        type:String,
        required:[true, "Please Provide a Company Name"],
        unique:[true, "Company Name should be unique"],
    },
    email:{
        type:String,
        required:[true, "Please Provide a Email"],
        unique:[true, "Email should be unique"],
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
        default:"",
    },
})

module.exports = mongoose.model("Company", companySchema);