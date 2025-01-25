// backend/controllers/authController.js
export const loginController = (req, res) => {
    const { email, password } = req.body;
  
    // Example: Check if user credentials are valid (Replace with actual logic)
    if (email === "test@example.com" && password === "password123") {
      return res.json({ success: true, message: "Login successful!" });
    }
  
    return res.status(401).json({ success: false, message: "Invalid credentials!" });
  };
  