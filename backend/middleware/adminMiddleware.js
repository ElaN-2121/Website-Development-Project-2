const authMiddleware = require("./authMiddleware");

const adminMiddleware = (req, res) => {
  // First, check if user is authenticated
  if (!authMiddleware(req, res)) return false;

  // Check admin role
  if (req.user.role !== "admin") {
    res.writeHead(403, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Access denied: admin only" }));
    return false;
  }

  return true; // Admin verified
};

module.exports = adminMiddleware;
