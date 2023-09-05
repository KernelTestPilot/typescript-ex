import { Router } from "express";
import authController from "../controllers/authController.js";

const router = Router();

router.get("/test", (req, res) => res.send("Hello World!"));

router.post("/auth/login", authController.login);

export default router;
