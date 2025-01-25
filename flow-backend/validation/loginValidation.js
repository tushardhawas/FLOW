// backend/validation/loginValidation.js
import { z } from "zod";

// Define login schema using Zod
const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(1, "Password must be at least 1 characters"),
});

// Middleware to validate request body using Zod schema
export const validateLogin = (req, res, next) => {
  try {
    loginSchema.parse(req.body);  // Validate the body using the Zod schema
    next();  // Proceed if valid
  } catch (error) {
    return res.status(400).json({ error: error.errors });
  }
};
