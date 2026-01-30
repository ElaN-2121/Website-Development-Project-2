const authMiddleware = require("./authMiddleware");

const adminMiddleware = (req, res) => {
  if (!authMiddleware(req, res)) return false;

  if (!req.user || req.user.role !== "admin") {
    res.writeHead(403, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Forbidden: Admin access required" }));
    return false;
  }

  return true;
};

module.exports = adminMiddleware;
