import express from "express";
import {
  LoginUse,
  createUse,
  deleteUse,
  getUse,
  updateUse,
} from "../controllers/user.controllers.js";
import {
  CreateUserValidation,
  updateUseUserValidation,
  LoginUserValidation,
} from "../utils/validation.mjs";
import { verifyToken } from "../utils/tokenVerify.js";

const router = express.Router();

router.post("/create-user", CreateUserValidation(), createUse);
router.post("/create-user/login", LoginUserValidation(), LoginUse);
router.get("/create-user", verifyToken, getUse);
router.put(
  "/create-user/:id",
  verifyToken,
  updateUseUserValidation(),
  updateUse
);
router.delete("/create-user/:id", verifyToken, deleteUse);

export default router;
