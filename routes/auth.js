const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");
const auth = require("../middleware/auth");
const userSchema = require("../models/user");

const router = express.Router();
const ABC = "heheh";
const EXPIRE_In = "123";

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await userSchema.findOne({ email });
  if (!existingUser) {
    return res.status(400).json({
      msg: "invalid",
    });
  }

  const isMatchPass = await bcrypt.compare(password, existingUser.password);
  if (!isMatchPass) {
    return res.status(400).json({
      msg: "invalid",
    });
  }

  delete existingUser.password;

  const payload = { ...existingUser };

  const token = jwt.sign(payload, ABC, {
    expiresIn: EXPIRE_In,
  });

  return res.json({
    isAuthenticated: true,
    accessToken: token,
  });
  // try {
  //   const user = await userSchema.findByCredentials(email, password);
  //   if (!user) {
  //     return res
  //       .status(401)
  //       .send({ error: "Login failed! Check authentication credentials" });
  //   }
  //   const token = await user.generateAuthToken();
  //   res.send({ user, token });
  // } catch (error) {
  //   res.status(400).send(error);
  // }
});

module.exports = router;
