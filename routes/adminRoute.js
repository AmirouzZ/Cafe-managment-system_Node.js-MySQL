import express from "express";

import { updateUserStatus } from "../controllers/adminController.js";

const router = express.Router();

router.post("/user/:id/status", updateUserStatus);

export default router;
