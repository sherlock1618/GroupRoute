const express = require("express");
const {
    HTTPGetAllGroups,
    HTTPCreateGroup,
    HTTPRemoveGroup,
    HTTPUpdateGroup
} = require("../controllers/group.controller");

const groupsRouter = express.Router();

groupsRouter.get("/get/all/admin", HTTPGetAllGroups);
groupsRouter.post("/create", HTTPCreateGroup);
groupsRouter.delete("/delete/:id", HTTPRemoveGroup);
groupsRouter.put("/update/:id", HTTPUpdateGroup);

module.exports = groupsRouter;