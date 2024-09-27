import express from "express";
const router = express.Router();
import { auth } from "../middlewares/auth.js";
import {
  login,
  logout,
  profile,
  signup,
  updateProfile,
} from "../controllers/userController.js";

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/profile").get(auth, profile).put(updateProfile);
router.route("/logout").post(auth, logout);

export default router;
