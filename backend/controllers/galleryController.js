const GalleryItem = require("../models/GalleryItem");
const getReqData = require("../utils/parseBody");

const getGalleryItems = async (req, res) => {
  try {
    const items = await GalleryItem.find();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(items));
  } catch(err) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: err.message }));
  }
};

const createGalleryItem = async (req, res) => {
  try {
    const body = await getReqData(req);
    const item = await GalleryItem.create(body);
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(item));
  } catch(err) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: err.message }));
  }
};

module.exports = { getGalleryItems, createGalleryItem };
