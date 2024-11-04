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
groupsRouter.get("/", (req, res) => {
    res.send("Welcome to the Groups API!"); // Your welcome message
});

module.exports = groupsRouter;