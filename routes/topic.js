const express = require("express");

const router = express.Router();

router.get("/all-topic", (req, res) => {});

router.post("/", (req, res) => {
  res.json({
    msg: "123",
  });
});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
