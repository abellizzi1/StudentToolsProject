const PORT = process.env.PORT || 4000;
const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const routesUrls = require('./routes/Routes.js');
const cors = require('cors');

require("dotenv").config();

mongoose
  .connect(
    "mongodb+srv://Human:Human@cluster0.6yfnmir.mongodb.net/table?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB has been connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "client", "build")));
app.use('/app', routesUrls);
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
// if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
//     app.use(express.static('./client/build'));
//     app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/client/build/index.html'));
//     });
//    }
const host = '0.0.0.0';
app.listen(PORT, host, () => {
    console.log("server running on port " + PORT);
  });