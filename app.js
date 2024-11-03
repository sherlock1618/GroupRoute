const express = require("express");
const app = express();
const api = require("./src/service/api");

app.use(express.json());

app.use('/japan/edu/api', api);

module.exports = app;