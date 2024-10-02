import express from "express";
const app = express();
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import userRoute from "./routes/userRoutes.js";
import serviceRoute from "./routes/serviceRoutes.js";
import connectDB from "./config/db.js";
dotenv.config();

const __dirname = path.resolve();


app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//database connection
connectDB();

//middleware
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/api/user", userRoute);
app.use("/api/service", serviceRoute);

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});

//server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
