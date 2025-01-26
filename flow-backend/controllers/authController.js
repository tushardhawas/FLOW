// backend/controllers/authController.js
import { account } from "../appwrite.js";

export const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Login user by creating session
    await account.createEmailPasswordSession(email, password);
    return res.json({ success: true, message: "Login successful!" });

  } catch (error) {
    console.error('Login error:', error);
    res.status(400).send('Login failed');
  }
 
};
export const signupController = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    await account.create( name, email, password);
    await account.createEmailPasswordSession(email, password);
    res.status(200).send("User registered and logged in");
  } catch (error) {
    console.error("Registration error:", error);
    res.status(400).send("Registration failed");
  }
};
