const { adminMiddleware } = require("../middleware/adminMiddleware");
const {
  getAllUsers,
  getAllMenuItems,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
  getAllReservations,
  getAllGalleryItems,
} = require("../controllers/adminController");

const adminRoutes = async (req, res) => {
  // 1. Check path prefix
  if (!req.url.startsWith("/api/admin")) return false;

  // 2. Security Check
  if (!adminMiddleware(req, res)) return true; 

  // --- MENU ROUTES ---

  // GET ALL
  if (req.url === "/api/admin/menu" && req.method === "GET") {
    await getAllMenuItems(req, res);
    return true;
  }

  // CREATE NEW
  if (req.url === "/api/admin/menu" && req.method === "POST") {
    await createMenuItem(req, res);
    return true;
  }

  // UPDATE (Catch ID: /api/admin/menu/67971e...)
  const updateMatch = req.url.match(/\/api\/admin\/menu\/([0-9a-fA-F]+)/);
  if (updateMatch && req.method === "PUT") {
    const id = updateMatch[1];
    await updateMenuItem(req, res, id);
    return true;
  }

  // DELETE (Catch ID)
  const deleteMatch = req.url.match(/\/api\/admin\/menu\/([0-9a-fA-F]+)/);
  if (deleteMatch && req.method === "DELETE") {
    const id = deleteMatch[1];
    await deleteMenuItem(req, res, id);
    return true;
  }

  // --- OTHER ROUTES ---
  if (req.url === "/api/admin/users" && req.method === "GET") {
    await getAllUsers(req, res);
    return true;
  }

  if (req.url === "/api/admin/reservations" && req.method === "GET") {
    await getAllReservations(req, res);
    return true;
  }
  
  if (req.url === "/api/admin/gallery" && req.method === "GET") {
      await getAllGalleryItems(req, res);
      return true;
  }

  // Fallback
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Admin route not found" }));
  return true;
};

module.exports = adminRoutes;