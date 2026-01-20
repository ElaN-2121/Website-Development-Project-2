const jwt = require("jsonwebtoken");

const adminMiddleware = (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.writeHead(401, {"Content-Type":"application/json"});
    res.end(JSON.stringify({ message: "No token provided" }));
    return false;
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") {
      res.writeHead(403, {"Content-Type":"application/json"});
      res.end(JSON.stringify({ message: "Admin access required" }));
      return false;
    }
    req.user = decoded;
    return true;
  } catch(err) {
    res.writeHead(401, {"Content-Type":"application/json"});
    res.end(JSON.stringify({ message: "Invalid token" }));
    return false;
  }
};

module.exports = { adminMiddleware };
