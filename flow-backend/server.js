// backend/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js"; // Import login routes
import cookieParser from "cookie-parser";
import workspacesRoutes from "./routes/workspacesRoutes.js"

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);
app.use(express.json()); // For parsing JSON request bodies
app.use(cookieParser());

// Use the login routes
app.use("/api", authRoutes);
app.use("/workspaces", workspacesRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
