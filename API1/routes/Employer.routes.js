import express from "express";

import {
  createEmployer,
  getAllEmployer,
  getEmployer,
  updateEmployer,
} from "../controller/Employe.controller.js";
import { verifyToken } from "../utils/verify.js";

const routs = express.Router();
routs.post("/create-employer/:id", createEmployer);

routs.put("/update-employer/:id", verifyToken, updateEmployer);
routs.get("/getall-employer", verifyToken, getAllEmployer);
routs.get("/get-employer/:id", verifyToken, getEmployer);

export default routs;
