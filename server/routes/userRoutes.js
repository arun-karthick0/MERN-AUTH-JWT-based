import express from "express";
const router = express.Router();
import {
  createUser,
  loginUser,
  profile,
} from "../controller/userController.js";

router.post("/create", createUser);
router.post("/login", loginUser);
router.get("/profile", profile);

export default router;
