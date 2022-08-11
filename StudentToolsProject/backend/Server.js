const express = require('express')
const path = require('path');
const app = express()
const mongoose = require('mongoose')
const routesUrls = require('./routes/Routes.js')
const cors = require('cors')

mongoose.connect("mongodb+srv://Human:Human@cluster0.6yfnmir.mongodb.net/table?retryWrites=true&w=majority", () =>console.log("Database connected"));

app.use(express.json())
app.use(cors())
app.use(express.static(path.resolve(__dirname, './StudentToolsProject/build')));
app.use('/app', routesUrls)
app.listen(4000, () => console.log("Server is running"))