const express = require("express");
const {
    HTTPGetAllGroups,
    HTTPCreateGroup,
    HTTPRemoveGroup,
    HTTPUpdateGroup
} = require("../controllers/group.controller");

const groupsRouter = express.Router();

const AuthenticateJWT = require("../authentication/auth.middleware");

groupsRouter.get("/get/all/admin", AuthenticateJWT, HTTPGetAllGroups);
groupsRouter.post("/create", AuthenticateJWT, HTTPCreateGroup);
groupsRouter.delete("/delete/:id", AuthenticateJWT, HTTPRemoveGroup);
groupsRouter.put("/update/:id", AuthenticateJWT, HTTPUpdateGroup);

module.exports = groupsRouter;