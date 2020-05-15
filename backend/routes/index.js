const express = require("express");
// const User = require("../models/users");

const router = express.Router();

router.get("/", (req, res) => {
  res.send('Hello!');
});

module.exports = router;
