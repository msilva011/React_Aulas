require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");
const tasks = require("./models/taskSchema");
const cors = require("cors");
const router = require("./routes/router");

const port = process.env.PORT || 8003;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(port, () => {
   console.log(`Server is running on port number: ${port}`);
});
