import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const { name, email, password, role } = req.body;
  if (!name || !email || !password) {
    return res.status(422).json({ error: "Please add all the fields" });
  }
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    return res.status(422).json({ error: "User already exists" });
  }
  const user = new userModel({
    name,
    email,
    password,
    role,
    location: "defaul location",
  });
  try {
    await user.save();
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res
      .cookie("zappToken", token, { maxAge: 24 * 60 * 60 * 1000 })
      .status(201)
      .json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email);

  if (!email || !password) {
    return res.status(422).json({ error: "Please add all the fields" });
  }
  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(422).json({ error: "Invalid credentials" });
  }
  if (password !== user.password) {
    return res.status(422).json({ error: "Invalid credentials" });
  }
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  res
    .cookie("zappToken", token, { maxAge: 24 * 60 * 60 * 1000 })
    .status(201)
    .json({ message: "User logged in successfully" });
};

export const profile = async (req, res) => {
  const { _id } = req.user;
  const user = await userModel.findById(_id).populate("services");
  res.json(user);
};

export const logout = async (req, res) => {
  res
    .clearCookie("zappToken")
    .status(200)
    .json({ message: "User logged out successfully" });
};
export const updateProfile = async (req, res) => {
  const { name, email, password } = req.body;
};
