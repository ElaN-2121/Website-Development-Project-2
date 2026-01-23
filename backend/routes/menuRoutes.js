const { getMenuItems, createMenuItem, updateMenuItem, deleteMenuItem } = require("../controllers/menuController");

const menuRoutes = async (req, res) => {
  const { method, url } = req;

  if (url === "/api/menu" && method === "GET") {
    await getMenuItems(req, res);
    return true;
  }

  if (url === "/api/admin/menu" && method === "POST") {
    await createMenuItem(req, res);
    return true;
  }

  if (url.startsWith("/api/admin/menu/")) {
    const id = url.split("/").pop();
    if (method === "DELETE") {
      await deleteMenuItem(req, res, id);
      return true;
    }
    if (method === "PUT") {
      await updateMenuItem(req, res, id); 
      return true;
    }
  }
  return false;
};

module.exports = menuRoutes;