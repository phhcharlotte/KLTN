const TopicModel = require("../models/topic");

const getAllTopic = async (req, res) => {
  try {
    const { id } = req.params;
    const topic = await TopicModel.findById(id);
    if (!user) {
      res.status(404).json({
        message: "Not Found",
      });
    }
    res.json({
      message: "Success",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      message: error.toString(),
    });
  }
};

const createTopic = async (req, res) => {
  try {
    const { title, total, created_by, created_at } = req.body;

    const topic = new TopicModel({
      title,
      total,
      created_by,
      created_at,
    });

    await topic.save();

    res.json({
      message: "Success",
    });
  } catch {
    res.status(400).json({
      message: error.toString(),
    });
  }
};

const updateTopic = async (req, res) => {
  try {
  } catch {}
};

const deleteTopic = async (req, res) => {
  try {
  } catch {}
};
module.exports = {
  getAllTopic,
  createTopic,
  updateTopic,
  deleteTopic,
};
