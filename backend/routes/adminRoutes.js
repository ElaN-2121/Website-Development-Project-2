const { adminMiddleware } = require("../middleware/adminMiddleware");
const { getAllUsers } = require("../controllers/adminController");

const adminRoutes = async (req, res) => {
  if (req.url === "/api/admin/users" && req.method === "GET") {
    if (!adminMiddleware(req, res)) return; // stops if not admin
    return getAllUsers(req, res);
  }
};

module.exports = adminRoutes;
