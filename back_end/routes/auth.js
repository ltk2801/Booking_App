const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hahaha");
});

router.get("/register", (req, res) => {
  res.send("hahaha");
});

module.exports = router;
