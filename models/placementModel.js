const mongoose = require("mongoose");

const placementSchema = new mongoose.Schema({
    collegeId:{
        type:String,
        required:[true, "College Id is required!!"],
    },
    studentName:{
        type:String,
        required:[true, "Please enter Student Name"],
    },
    company:{
        type:String,
        required:[true, "Please enter Company Name"],
    },
    profile:{
        type:String,
    },
    package:{
        type:String,
    },
    studentImage:{
        type:String,
        required:[true, "Please enter Student's Image"],
        default:'https://res.cloudinary.com/archit-cloud-for-images/image/upload/v1653384461/Placement_Images/student-image_2_jkpcp9.jpg',
    },
    year:{
        type:String,
        default:"2022",
    }
});

module.exports = mongoose.model("Placement", placementSchema);