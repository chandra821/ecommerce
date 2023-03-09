import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgetPasswordcontroller,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
// router object
const router = express.Router();

// routing
// REGISTER || METHOD POST
router.post("/register", registerController);

// LOGIN ||POST
router.post("/login", loginController);

// forget password || post
router.post("/forgot-password", forgetPasswordcontroller);

// test routes
router.get("/test", requireSignIn, isAdmin, testController);
// protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
// protected Admin route auth
router.get("/admin-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
// update profile
router.put("/profile", requireSignIn, updateProfileController);

// orders
router.get("/orders", requireSignIn, getOrdersController);

// all-orders
router.get("/all-orders", requireSignIn, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);
export default router;
