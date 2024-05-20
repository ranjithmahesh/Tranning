import express from "express";
import {
  createUser,
  getUser,
  LoginUser,
  updateUser,
  getAllUser,
} from "../controller/User.controller.js";
import {
  CreateUserValidation,
  LoginUserValidation,
  UpdateUserValidation,
} from "../utils/validation.mjs";
import { verifyToken } from "../utils/verify.js";

const routs = express.Router();
routs.post("/create-user", CreateUserValidation(), createUser);
routs.post("/login-user", LoginUserValidation(), LoginUser);
routs.put("/update-user/:id", verifyToken, UpdateUserValidation(), updateUser);
routs.get("/getall-user", verifyToken, getAllUser);
routs.get("/get-user/:id", verifyToken, getUser);

export default routs;
