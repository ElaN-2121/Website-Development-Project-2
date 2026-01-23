const { getMenuItems } = require("../controllers/menuController");

const menuRoutes = async (req, res) => {
  // Allow public access to /api/menu
  if (req.url === "/api/menu" && req.method === "GET") {
    await getMenuItems(req, res);
    return true;
  }
  return false;
};

module.exports = menuRoutes;