const express = require("express");
const router = express.Router();

// Sample route for tasks
router.get("/", (req, res) => {
  res.json({ message: "Get all tasks" });
});

router.post("/", (req, res) => {
  const { title, description } = req.body;
  res.json({ message: "Task created", task: { title, description } });
});

module.exports = router;
