var mongoose = require("mongoose");

var RegisterTopicSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
    trim: true,
  },
  msv: {
    type: String,
    require: true,
    trim: true,
  },
  teacher_name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("registerTopic", RegisterTopicSchema);
