const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

async function registerController(req, res) {


  const { fullname, username, password } = req.body;
  const isUserExist = await userModel.findOne({
    username: username,
  });

  if (isUserExist) {
    return res.status(409).json({
      message: "User already exists! or Username  not available!",
    });
  }

  
  const user = await userModel.create({
    fullname,
    username,
    password: await bcrypt.hash(password, 10),
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);

  res.cookie("token", token);

  return res.status(201).json({
    message: "user created successfully",
    user,
  });
}

async function loginController(req, res) {
  const { username, password } = req.body;

  const user = await userModel.findOne({
    username: username,
  });

  if (!user) {
    return res.status(401).json({
      message: "Invalid username",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Invalid Password!",
    });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
  res.cookie("token", token);

  return res.status(200).json({
    message: "User logged in successfully!",
  });
}

async function logoutController(req, res) {
    res.clearCookie("token")

    return res.status(200).json({
        message : "User logged out!"
    })
}

module.exports = { registerController, loginController, logoutController };
