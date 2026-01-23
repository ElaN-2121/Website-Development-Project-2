const {
  getMenuItems,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem
} = require("../controllers/menuController");

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

  return false;
};

module.exports = adminRoutes;
