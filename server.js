const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db/conn");
const collegeAuthRoutes = require("./routes/collegeAuthRoutes");
const collegePlacementRoutes = require("./routes/collegePlacementRoutes");
const companyAuthRoutes = require("./routes/companyAuthRoutes");
const collegeJobRoutes = require("./routes/collegeJobRoutes");
const app = express();
dotenv.config();

// middlewares
app.use(express.json());
app.use(cors("*"));

app.use("/college", collegeAuthRoutes);
app.use("/college/placement", collegePlacementRoutes);

app.use("/company", companyAuthRoutes);
app.use("/company/job", collegeJobRoutes);

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