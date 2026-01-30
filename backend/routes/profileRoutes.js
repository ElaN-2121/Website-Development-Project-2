const adminMiddleware = require("../middleware/adminMiddleware");
const {
  getProfile,
  updateProfile,
} = require("../controllers/profileController");

const profileRoutes = async (req, res) => {
  if (req.url === "/api/profile" && req.method === "GET") {
    if (!adminMiddleware(req, res)) return true;
    await getProfile(req, res);
    return true; // 🔥 REQUIRED
  }

  if (req.url === "/api/profile" && req.method === "PUT") {
    if (!adminMiddleware(req, res)) return true;
    await updateProfile(req, res);
    return true; // 🔥 REQUIRED
  }

  return false;
};

module.exports = profileRoutes;
