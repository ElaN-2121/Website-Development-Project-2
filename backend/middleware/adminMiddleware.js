const { adminMiddleware } = require("../middleware/adminMiddleware");
const { getProfile, updateProfile } = require("../controllers/profileController");

const profileRoutes = async (req, res) => {
  console.log("PROFILE ROUTE CHECK:", req.method, req.url);

  if (req.url.startsWith("/api/profile") && req.method === "GET") {
    if (!adminMiddleware(req, res)) return true;
    await getProfile(req, res);
    return true;
  }

  if (req.url.startsWith("/api/profile") && req.method === "PUT") {
    if (!adminMiddleware(req, res)) return true;
    await updateProfile(req, res);
    return true;
  }

  return false;
};

module.exports = profileRoutes;
