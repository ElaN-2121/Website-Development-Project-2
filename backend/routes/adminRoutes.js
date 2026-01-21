// routes/adminRoutes.js
const { adminMiddleware } = require("../middleware/adminMiddleware");
const {
  getAllUsers,
  getAllMenuItems,
  createMenuItem,
  getAllReservations,
  getAllGalleryItems,
} = require("../controllers/adminController");

const adminRoutes = async (req, res) => {
  // Only process if URL starts with /api/admin
  if (!req.url.startsWith("/api/admin")) return false;

  // Security Check
  if (!adminMiddleware(req, res)) return true;

  // USERS
  if (req.url === "/api/admin/users" && req.method === "GET") {
    await getAllUsers(req, res);
    return true;
  }

  // MENU
  if (req.url === "/api/admin/menu" && req.method === "GET") {
    await getAllMenuItems(req, res);
    return true;
  }

  if (req.url === "/api/admin/menu" && req.method === "POST") {
    await createMenuItem(req, res);
    return true;
  }

  // RESERVATIONS
  if (req.url === "/api/admin/reservations" && req.method === "GET") {
    await getAllReservations(req, res);
    return true;
  }

  // GALLERY
  if (req.url === "/api/admin/gallery" && req.method === "GET") {
    await getAllGalleryItems(req, res);
    return true;
  }

  // Fallback for unknown admin route
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Admin sub-route not found" }));
  return true;
};

module.exports = adminRoutes;