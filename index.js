const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello, Team!" });
});

app.get("/health", (req, res) => {
  console.log('to health!');
  res.json({ status: "OK!!!!!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
