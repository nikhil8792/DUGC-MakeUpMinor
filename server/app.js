import express  from "express"
import  dotenv  from "dotenv"
import mongoose from "mongoose";
// import connectDB from "./config/db.js"
dotenv.config();
const app=express()
import cookieParser from "cookie-parser"

const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/test"
// console.log(MONGO_URL)mongodb://localhost:27017


import cors from 'cors'
//cookies and filemiddleware
app.use(cors())

app.use(cookieParser())

mongoose.connect(MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useNewUrlParser:true,
    // useCreateIndex:true
})
.then(console.log("DB Connected Succesfully...."))
.catch((err)=>{
    console.log("DB Connection Failed!")
    console.log(err)
    process.exit(1)
});

// morgan middlewares
import morgan from "morgan"
app.use(morgan("tiny"))

// regular middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// import all routes here
import userRoutes from "./routes/userRoutes.js"
import courseRoutes from "./routes/courseRoutes.js"


// router middleware
app.use("/api/user",userRoutes);
app.use("/api/course",courseRoutes);

export default app;