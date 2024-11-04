// generateToken.js
require("dotenv").config();
const jwt = require("jsonwebtoken");

const token = jwt.sign({ id: "1", role: "admin" }, process.env.JWT_SECRET, { expiresIn: "1d" });
console.log("Generated Token:", token);
