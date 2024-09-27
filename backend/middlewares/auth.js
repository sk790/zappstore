import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const auth = async (req, res, next) => {
  const token = req.cookies.zappToken;
  if (token) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await userModel.findById(decoded._id);
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};
