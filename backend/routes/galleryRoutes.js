const { getGalleryItems, createGalleryItem } = require("../controllers/galleryController");
const { adminMiddleware } = require("../middleware/adminMiddleware");

const galleryRoutes = async (req, res) => {
  if (req.url === "/api/gallery" && req.method === "GET") {
    await getGalleryItems(req, res);
    return true;
  }
  if (req.url === "/api/gallery" && req.method === "POST") {
    if (!adminMiddleware(req, res)) return true;
    await createGalleryItem(req, res);
    return true;
  }
  return false;
};

module.exports = galleryRoutes;
