import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(process.env.MOGO_URI)
    .then((e) => {
      console.log("MongoDB connected successfully", e.connection.host);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectDB;
