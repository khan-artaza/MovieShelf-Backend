const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

async function authMiddleware(req, res, next) {
  const { token } = req.cookies;
  console.log(token);


  

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized user - Please login first to wishlst movies!",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const userFromDB = await userModel.findOne({
      _id: decoded.id,
    });
    req.user = userFromDB;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized User - Invalid Token , please login again",
    });
  }
}

module.exports = authMiddleware;
