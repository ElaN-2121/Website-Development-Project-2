const { getMenuItems, createMenuItem } = require("../controllers/menuController");
const { adminMiddleware } = require("../middleware/adminMiddleware");

const menuRoutes = async (req, res) => {
  if (req.url === "/api/menu" && req.method === "GET") {
    await getMenuItems(req, res);
    return true;
  }
  if (req.url === "/api/menu" && req.method === "POST") {
    if (!adminMiddleware(req, res)) return true;
    await createMenuItem(req, res);
    return true;
  }
  return false;
};

module.exports = menuRoutes;
