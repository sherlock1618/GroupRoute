// auth.middleware.js
const jwt = require("jsonwebtoken");
require("dotenv").config();

function AuthenticateJWT(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; 

    if (!token) {
        return res.status(401).json({ error: "Unauthorized: No token provided." });
    }

    console.log("Token:", token);
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        console.log("JWT_SECRET:", process.env.JWT_SECRET);
        console.log(err);
        console.log(user);
        if (err) {
            return res.status(403).json({ error: "Forbidden: Invalid token." });
        }

        // Only allow admin users for specific routes
        if (user.role !== "admin") {
            return res.status(403).json({ error: "Forbidden: Admins only." });
        }

        req.user = user;
        next();
    });
}

module.exports = AuthenticateJWT;
