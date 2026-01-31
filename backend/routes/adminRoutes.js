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

const adminRoutes = async (req, res) => {
  const url = req.url.split("?")[0].replace(/\/$/, "");

  // ===== ADMIN MENU MANAGEMENT =====
  if (url === "/api/admin/menu" && req.method === "GET") {
    await getMenuItems(req, res);
    return true;
  }

  if (url === "/api/admin/menu" && req.method === "POST") {
    await createMenuItem(req, res);
    return true;
  }

  if (url.startsWith("/api/admin/menu/")) {
    const id = url.split("/").pop();
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
  if (url === "/api/admin/profile") {
    // This protects the profile data so only admins can access it
    if (!adminMiddleware(req, res)) return true; 

    if (req.method === "GET") {
      await getAdminProfile(req, res);
      return true;
    }

    if (req.method === "PUT") {
      await updateAdminProfile(req, res);
      return true;
    }
  }

  return false;
};

module.exports = adminRoutes;