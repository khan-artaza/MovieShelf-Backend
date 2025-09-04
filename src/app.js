const express = require('express')
const authRoutes = require('./routes/auth.routes')
const movieRoutes = require('./routes/movie.routes')
const userRoutes = require('./routes/user.routes')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173"

app.use(cors({
    origin: FRONTEND_URL, // your React app's URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // if you're using cookies/auth headers
  }))
  
app.use(cookieParser())
app.use(express.json())
app.use("/auth", authRoutes)
app.use("/movie", movieRoutes)
app.use("/user", userRoutes)


module.exports = app