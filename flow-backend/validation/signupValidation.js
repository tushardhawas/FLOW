// backend/validation/loginValidation.js
import { z } from "zod";

// Define login schema using Zod
const signupSchema = z.object({
  name:z.string(),
  email: z.string().email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

// Middleware to validate request body using Zod schema
export const validateSignup = (req, res, next) => {
  try {
    signupSchema.parse(req.body);  // Validate the body using the Zod schema
    next();  // Proceed if valid
  } catch (error) {
    return res.status(400).json({ error: error.errors });
  }
};
