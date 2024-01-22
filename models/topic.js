var mongoose = require("mongoose");

var TopicSchema = new mongoose.Schema({
  title: {
    unique: true,
    type: String,
    required: true,
    trim: true,
  },
  total: {
    type: Number,
    required: true,
  },
  registered: {
    type: Number,
    default: "",
  },
  accepted: {
    type: Number,
    default: "",
  },
  created_by: {
    type: String,
    default: "",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("topic", TopicSchema);
