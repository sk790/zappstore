import express from "express";
const router = express.Router();
import { auth, authorizeRole } from "../middlewares/auth.js";
import {
  createService,
  getAllServices,
  getSingleService,
  editService,
  deleteService,
} from "../controllers/serviceController.js";

router
  .route("/getAllServices")
  .get(auth, authorizeRole("admin"), getAllServices);
router
  .route("/newService")
  .post(auth, authorizeRole("provider"), createService);
router.route("/getSingleService/:serviceId").get(auth, getSingleService);
router
  .route("/deleteService/:serviceId")
  .delete(auth, authorizeRole("provider"), deleteService);
router
  .route("/editService/:serviceId")
  .put(auth, authorizeRole("provider"), editService);

export default router;
