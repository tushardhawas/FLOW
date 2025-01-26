// backend/routes/login.js
import express from "express";
import { validateLogin } from "../validation/loginValidation.js";
import { loginController } from "../controllers/authController.js";

const router = express.Router();

// POST route for login
router.post("/signup", validateLogin, loginController);

export default router;
