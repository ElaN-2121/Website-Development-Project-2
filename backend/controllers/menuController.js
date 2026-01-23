const MenuItem = require("../models/MenuItem");
const formidable = require("formidable");
const path = require("path");
const fs = require("fs");

// 1. GET ALL ITEMS
const getMenuItems = async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(items));
  } catch(err) {
    res.writeHead(500); res.end(JSON.stringify({ message: err.message }));
  }
};

// 2. CREATE NEW ITEM (Handles Image + FormData)
const createMenuItem = async (req, res) => {
  const form = new formidable.IncomingForm();
  form.uploadDir = path.join(__dirname, "../uploads"); 
  form.keepExtensions = true;

  form.parse(req, async (err, fields, files) => {
    if (err) {
      res.writeHead(500); res.end(JSON.stringify({ message: "Upload Error" }));
      return;
    }
    try {
      const newItem = new MenuItem({
        name: fields.name[0],
        price: fields.price[0],
        category: fields.category[0],
        description: fields.description[0],
        image: files.image ? `uploads/${path.basename(files.image[0].filepath)}` : ""
      });
      await newItem.save();
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(newItem));
    } catch (err) {
      res.writeHead(400); res.end(JSON.stringify({ message: err.message }));
    }
  });
};

// 3. UPDATE ITEM
const updateMenuItem = async (req, res, id) => {
  const form = new formidable.IncomingForm();
  form.uploadDir = path.join(__dirname, "../uploads");
  form.keepExtensions = true;

  form.parse(req, async (err, fields, files) => {
    try {
      const updateData = {
        name: fields.name[0],
        price: fields.price[0],
        category: fields.category[0],
        description: fields.description[0],
      };
      if (files.image) {
        updateData.image = `uploads/${path.basename(files.image[0].filepath)}`;
      }
      const updated = await MenuItem.findByIdAndUpdate(id, updateData, { new: true });
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(updated));
    } catch (err) {
      res.writeHead(400); res.end(JSON.stringify({ message: err.message }));
    }
  });
};

// 4. DELETE ITEM
const deleteMenuItem = async (req, res, id) => {
  try {
    await MenuItem.findByIdAndDelete(id);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Deleted" }));
  } catch (err) {
    res.writeHead(500); res.end(JSON.stringify({ message: err.message }));
  }
};

module.exports = { getMenuItems, createMenuItem, updateMenuItem, deleteMenuItem };