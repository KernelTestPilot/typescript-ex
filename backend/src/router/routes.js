import { Router } from "express";
import authController from "../controllers/authController.js";
import bookController from "../controllers/bookController.js";
const router = Router();

router.post("/auth/login", authController.login);

router.delete("/user/book", bookController.unSubscribeToBooking);
router.post("/user/book", bookController.subscribeToBooking);
router.get("/user/book", bookController.getAllBookings);
router.get("/user/subscriptions", bookController.getSubscriptions);

router.post("/admin/book", bookController.addBooking);
router.get("/admin/subUsers", bookController.getSubscribedUsers);
router.get("/admin/users", bookController.getUsers);

export default router;
