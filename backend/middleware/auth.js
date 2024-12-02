const jwt = require("jsonwebtoken");
require("dotenv").config();

function authenticateToken(req, res, next) {
  // Retrieve the token from the Authorization header
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  // If no token is provided, return unauthorized
  if (!token) return res.status(401).send("Access denied. No token provided.");

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).send("Invalid token.");
    
    // Attach user info to the request object
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;
