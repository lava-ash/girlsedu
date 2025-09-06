const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());

app.get("/hello", (req, res) => {
  res.json({ msg: "Hello from the backend 👋" });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

