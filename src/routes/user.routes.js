const express = require('express')
const authMiddleware = require('../middlewares/auth.middleware')
const getUserProfileController = require('../controllers/user.controller')

const router = express.Router()

router.get("/profile",authMiddleware, getUserProfileController)

module.exports = router