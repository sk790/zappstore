import express from "express";
const app = express();
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import userRoute from './routes/userRoutes.js'
import serviceRoute from './routes/serviceRoutes.js'
import connectDB from "./config/db.js";
dotenv.config();

//database connection
connectDB();

//middleware
app.use(express.json());
app.use(cookieParser());

//routes
app.use('/api/user',userRoute)
app.use('/api/service',serviceRoute)

//server
app.listen(process.env.PORT || 5000,()=>{
    console.log(`server is running on port ${process.env.PORT || 5000}`)
})