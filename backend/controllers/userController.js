import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const { name, email, password, role, location } = req.body;
  if (!name || !email || !password) {
    return res.status(422).json({ error: "Please add all the fields" });
  }
  const user = new userModel({ name, email, password, role, location });
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

export const updateServices = async (req, res) => {
  const { _id } = req.user;
  const { name, description, price, category, serviceType } = req.body;

  try {
    const provider = await userModel.findById(_id);
    if (!provider) {
      return res.status(404).json({ error: "Provider not found" });
    }
    provider.services.push({
      name,
      description,
      price,
      category,
      serviceType,
      provider: provider._id,
    });
    await provider.save();
    res.json({ message: "Services updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
