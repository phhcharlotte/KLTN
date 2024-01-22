const express = require("express");
const TopicController = require("../controllers/topicController");

const router = express.Router();

router.get("/all-topic", TopicController.getAllTopic);

router.post("/", TopicController.createTopic);

router.put("/:id", TopicController.updateTopic);

router.delete("/:id", TopicController.deleteTopic);

module.exports = router;
