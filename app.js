const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

// Middlewares....
app.use(cors());
app.use(bodyParser.json());

// Import Routes
const postRoute = require("./routes/posts");

app.use("/posts", postRoute);

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("Connection ok...")
);

// Listen to server
app.listen(3000);
