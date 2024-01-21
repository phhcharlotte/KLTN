const express = require("express");

const router = express.Router();

router.get("/all-topic", (req, res) => {
  res.send("123123123123");
});

router.post("/", (req, res) => {
  console.log(req);
  res.json({
    msg: "123",
  });
});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
