import express from "express";
import {
  registerController,
  loginController,
  logoutController,
} from "../controllers/authController.js";
import { validateRequest } from "../Middleware/validateRequest.js";
import { signupSchema, loginSchema } from "../validation/authValidation.js";
import { sessionMiddleware } from "../Middleware/sessionMiddleware.js";
const router = express.Router();

router.get("/current", sessionMiddleware, (req, res) => {
  const user = req.user;
  return res.json({ date: user });
});
router.post("/register", validateRequest(signupSchema), registerController);
router.post("/login", validateRequest(loginSchema), loginController);
router.post("/logout", sessionMiddleware, logoutController);

export default router;
