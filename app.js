const express = require("express");
const app = express();
const api = require("./src/service/api");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use('/japan/edu/api', api);

module.exports = app;