const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("🚀 Node is working on Windows!");
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
