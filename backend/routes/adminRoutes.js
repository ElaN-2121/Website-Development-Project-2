const { adminMiddleware } = require("../middleware/adminMiddleware");
const {
  getAllUsers,
  getAllMenuItems,
  createMenuItem,
  getAllReservations,
  getAllGalleryItems,
} = require("../controllers/adminController");

const adminRoutes = async (req, res) => {
  // USERS
  if (req.url === "/api/admin/users" && req.method === "GET") {
    if (!adminMiddleware(req, res)) return;
    return getAllUsers(req, res);
  }

  // MENU
  if (req.url === "/api/admin/menu" && req.method === "GET") {
    if (!adminMiddleware(req, res)) return;
    return getAllMenuItems(req, res);
  }

  if (req.url === "/api/admin/menu" && req.method === "POST") {
    if (!adminMiddleware(req, res)) return;
    return createMenuItem(req, res);
  }

  // RESERVATIONS
  if (req.url === "/api/admin/reservations" && req.method === "GET") {
    if (!adminMiddleware(req, res)) return;
    return getAllReservations(req, res);
  }

  // GALLERY
  if (req.url === "/api/admin/gallery" && req.method === "GET") {
    if (!adminMiddleware(req, res)) return;
    return getAllGalleryItems(req, res);
  }

  // Fallback for unknown admin route
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Admin route not found" }));
};

module.exports = adminRoutes;
