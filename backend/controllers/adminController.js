const User = require("../models/User");
const Menu = require("../models/MenuItem");
const Reservation = require("../models/Reservation");
const Gallery = require("../models/GalleryItem");
const getReqData = require("../utils/parseBody");

// MENU CONTROLS
const getAllMenuItems = async (req, res) => {
  try {
    const items = await Menu.find();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(items));
  } catch (err) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Error fetching menu items", error: err.message }));
  }
};

const createMenuItem = async (req, res) => {
  try {
    const body = await getReqData(req);
    const newItem = await Menu.create(body);
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(newItem));
  } catch (err) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Error creating menu item", error: err.message }));
  }
};

const updateMenuItem = async (req, res, id) => {
  try {
    const body = await getReqData(req);
    const updatedItem = await Menu.findByIdAndUpdate(id, body, { new: true });
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(updatedItem));
  } catch (err) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Error updating item", error: err.message }));
  }
};

const deleteMenuItem = async (req, res, id) => {
  try {
    await Menu.findByIdAndDelete(id);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Item deleted successfully" }));
  } catch (err) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Error deleting item", error: err.message }));
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, "-password");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  } catch (err) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Error", error: err.message }));
  }
};

module.exports = {
  getAllUsers,
  getAllMenuItems,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem
};