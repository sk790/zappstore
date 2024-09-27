import express from "express";
import {
  createService,
  getAllServices,
  getSingleService,
  editService,
  deleteService,
} from "../controllers/serviceController.js";
import { auth } from "../middlewares/auth.js";
const router = express.Router();

router.route("/getAllServices").get(getAllServices);
router.route("/newService").post(auth,createService);
router.route("/getSingleService/:serviceId").get(getSingleService);
router.route("/deleteService/:serviceId").delete(auth,deleteService)
router.route("/editService/:serviceId").put(auth,editService)

export default router;
