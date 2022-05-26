const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db/conn");
const collegeRoutes = require("./routes/collegeRoutes");
const companyRoutes = require("./routes/companyRoutes");
const app = express();
dotenv.config();

// middlewares
app.use(express.json());
app.use(cors("*"));

app.use("/college", collegeRoutes);
app.use("/company", companyRoutes);

// Setting up Database and Server to run in sync
const PORT = process.env.PORT || 5000; 
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