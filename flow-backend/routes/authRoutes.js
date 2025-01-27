import express from 'express';
import { registerController, loginController } from '../controllers/authController.js';
import { validateRequest } from '../Middleware/validateRequest.js';
import { signupSchema,loginSchema } from '../validation/authValidation.js';
const router = express.Router();

router.post('/register', validateRequest(signupSchema), registerController);
router.post('/login', validateRequest(loginSchema), loginController);

export default router;
