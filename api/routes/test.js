//imports
const express = require("express");
const router = express.Router();

router.get("/message", (req, res, next) => {
  res.status(200).json({
    message: "Hello World!",
  });
});

module.exports = router;
