const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.logIn = async (req, res) => {
  console.log("Log 1");
  const user = await User.findOne({ "user.email": req.body.email });
  console.log("Log 2");
  res.send(user);
};
