const authMiddleware = require("../middleware/authMiddleware");

const profileRoutes = async (req, res) => {
  if (req.url === "/api/profile" && req.method === "GET") {
    // 1. Run the middleware to verify the JWT token
    const isAuthenticated = await authMiddleware(req, res);
    if (!isAuthenticated) return true; // Stop if the token is invalid

    // 2. If valid, the middleware will have attached 'user' to the 'req' object
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ 
        message: "Welcome to your profile", 
        userId: req.user.id,
        role: req.user.role 
    }));
    return true;
  }
  return false;
};

module.exports = profileRoutes;