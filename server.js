const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
  });
});

app.get("/api/tasks", (req, res) => {
    console.log("yes");
    
  const tasks = [
    {
      id: "1",
      text: "Learn Express",
      completed: false,
    },
    {
      id: "2",
      text: "Build First API",
      completed: true,
    },
    {
      id: "3",
      text: "Connect Frontend",
      completed: false,
    },
  ];

  res.status(200).json(tasks);
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});