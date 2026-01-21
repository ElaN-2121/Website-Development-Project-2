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
  // 1. Only process if URL starts with /api/admin
  if (!req.url.startsWith("/api/admin")) return false;

  // 2. Security Check (Admin Only)
  // adminMiddleware returns true if authorized, false if not.
  if (!adminMiddleware(req, res)) return true; // Handled (blocked)

  // 3. Sub-routing for Admin Tasks
  
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

  // 4. Fallback for any /api/admin route that doesn't exist
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Admin sub-route not found" }));
  return true;
};

module.exports = adminRoutes;