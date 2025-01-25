// backend/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import loginRoutes from "./routes/login.js";  // Import login routes

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); // For parsing JSON request bodies

// Use the login routes
app.use("/api", loginRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
