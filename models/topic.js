var mongoose = require("mongoose");

var TopicSchema = new mongoose.Schema({
  title: {
    unique: true,
    type: String,
    required: true,
    trim: true,
  },
  total: {
    type: String,
    required: true,
  },
  registered: {
    type: String,
    required: true,
  },
  accepted: {
    type: String,
    enum: ["USER", "ADMIN"],
    default: "USER",
  },
  created_by: {
    type: String,
    default: "",
  },
  created_at: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("topic", TopicSchema);
