import express from "express";
import {
  login,
  logout,
  profile,
  signup,
  updateProfile,
  updateServices,
} from "../controllers/userController.js";
import { auth } from "../middlewares/auth.js";
const router = express.Router();

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/profile").get(auth, profile).put(updateProfile);
router.route("/logout").post(logout);
router.route("/update-service").post(auth,updateServices);

export default router;
