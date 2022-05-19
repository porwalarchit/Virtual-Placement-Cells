const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db/conn");
const collegeAuthRoutes = require("./routes/collegeAuthRoutes");
const app = express();
dotenv.config();

// middleware
app.use(express.json());
app.use("/college", collegeAuthRoutes);

// Setting up Database and Server to run in sync
const PORT = process.env.PORT || 3000
const start = async() =>{
    try {
        await connectDB(process.env.MONGO_URI);
        console.log("Connection to DB Successful");
        app.listen(PORT, ()=>{
            console.log(`Server running at port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}
start();