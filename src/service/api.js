const express = require('express');
const groupsRouter = require("../routers/group.router");


const api = express.Router();

api.use('/group', groupsRouter);

module.exports = api;