// controllers/adminController.js

const Menu = require("../models/Menu");
const Reservation = require("../models/Reservation");
const Gallery = require("../models/Gallery");

// ============================
// MENU CONTROLS
// ============================

// Get all menu items
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

// Create new menu item
const createMenuItem = async (req, res) => {
  try {
    const { name, price, category, description, image } = req.body;
    const newItem = await Menu.create({ name, price, category, description, image });
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(newItem));
  } catch (err) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Error creating menu item", error: err.message }));
  }
};

// ============================
// RESERVATION CONTROLS
// ============================

// Get all reservations
const getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(reservations));
  } catch (err) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Error fetching reservations", error: err.message }));
  }
};

// ============================
// GALLERY CONTROLS
// ============================

// Get all gallery items
const getAllGalleryItems = async (req, res) => {
  try {
    const galleryItems = await Gallery.find();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(galleryItems));
  } catch (err) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Error fetching gallery items", error: err.message }));
  }
};

// ============================
// EXPORT
// ============================
module.exports = {
  getAllMenuItems,
  createMenuItem,
  getAllReservations,
  getAllGalleryItems,
};
