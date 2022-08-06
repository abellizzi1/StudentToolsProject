const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/Routes.js')
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.USERS, () =>console.log("USERS connected"));
mongoose.connect(process.env.FRIENDS, () =>console.log("FRIENDS connected"));

app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.listen(4000, () => console.log("Server is running"))