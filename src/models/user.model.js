const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    fullname : String,
    username : String,
    password : String,
})

const userModel = mongoose.model("users", userSchema)

module.exports = userModel