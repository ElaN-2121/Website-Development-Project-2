const adminMiddleware = require("../middleware/adminMiddleware");
const {
  getMenuItems,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
} = require("../controllers/menuController");
const {
  getAdminProfile,
  updateAdminProfile,
} = require("../controllers/adminController");
const adminMiddleware = require("../middleware/adminMiddleware");
const adminRoutes = async (req, res) => {
  if (req.url === "/api/admin/menu" && req.method === "GET") {
    await getMenuItems(req, res);
    return true;
  }

  if (req.url === "/api/admin/menu" && req.method === "POST") {
    await createMenuItem(req, res);
    return true;
  }

  if (req.url.startsWith("/api/admin/menu/")) {
    const id = req.url.split("/").pop();

    if (req.method === "PUT") {
      await updateMenuItem(req, res, id);
      return true;
    }

    if (req.method === "DELETE") {
      await deleteMenuItem(req, res, id);
      return true;
    }
  }
  // ===== ADMIN PROFILE =====
  const url = req.url.split("?")[0].replace(/\/$/, ""); // normalize URL

  if (url === "/api/admin/profile" && req.method === "GET") {
    if (!adminMiddleware(req, res)) return true;
    await getAdminProfile(req, res);
    return true;
  }

  if (url === "/api/admin/profile" && req.method === "PUT") {
    if (!adminMiddleware(req, res)) return true;
    await updateAdminProfile(req, res);
    return true;
  }
  return false;
};

module.exports = adminRoutes;
