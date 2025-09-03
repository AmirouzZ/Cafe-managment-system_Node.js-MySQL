import express from "express";

import {
  getAllUsers,
  getUserProfile,
  updateUserProfile,
  changePassword,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", getAllUsers);

router.get("/:id", getUserProfile);

router.put("/:id", updateUserProfile);

router.post("/:id/password/change", changePassword);

export default router;
