const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
// const validationMongoId = require("../helpers/validationMongoId");
const { signJWt } = require("../helpers/jwt");

const fetchAllStudents = async (req, res) => {
  try {
    const users = await User.find();

    if (!users) {
      res.status(404).json({
        message: "Not Found",
      });
    }

    res.json({
      message: "Success",
      data: users,
    });
  } catch (error) {
    res.status(400).json({
      message: error.toString(),
    });
  }
};

const fetchStudent = async (req, res) => {
  try {
    const { id } = req.params;
    // const isValid = validationMongoId(id);

    // if (!isValid) {
    //   res.status(404).json({
    //     message: "Id is valid",
    //   });
    // }

    // const checkUserSameId = req.decode === id;
    // console.log(id);

    const user = await User.findById(id);

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

const createUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const existingUser = await UserModel.findOne({ username });

    if (existingUser) {
      return res.status(400).json({
        msg: "User already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      username,
      password: hashedPassword,
      email,
      role,
    });
    await user.save();

    res.json({
      message: "Success",
    });
  } catch (error) {
    res.status(400).json({
      message: error.toString(),
    });
  }
};

const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email } = req.body;

    // const isValid = validationMongoId(id);

    // if (!isValid) {
    //   res.status(404).json({
    //     message: "Id is valid",
    //   });
    // }
    const existingUser = await UserModel.findById(id);

    if (!existingUser) {
      return res.status(400).json({
        msg: "User not exists",
      });
    }

    await UserModel.findByIdAndUpdate(id, {
      username,
      email,
    });

    res.json({
      message: "Success",
    });
  } catch (error) {
    res.status(400).json({
      message: error.toString(),
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    return res.status(400).json({
      msg: "Missing require keys",
    });
  }

  // Check isExist user
  const existingUser = await UserModel.findOne({ email });
  if (!existingUser) {
    return res.status(400).json({
      msg: "Invalid credentials",
    });
  }

  // Match password
  const isMatchPassword = await bcrypt.compare(password, existingUser.password);
  if (!isMatchPassword) {
    return res.status(400).json({
      msg: "Invalid credentials",
    });
  }

  const payload = {
    id: existingUser._id,
    email: existingUser.email,
    role: existingUser.role,
  };

  const token = signJWt(payload);

  // Response client
  return res.json({
    isAuthenticated: true,
    accessToken: token,
  });
};

module.exports = {
  fetchAllStudents,
  fetchStudent,
  createUser,
  updateStudent,
  login,
};
