// controllers/adminController.js
const User = require("../models/User"); // Added this
const Menu = require("../models/MenuItem");
const Reservation = require("../models/Reservation");
const Gallery = require("../models/GalleryItem");

// ============================
// USER CONTROLS
// ============================

// Get all registered users (Added this function)
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, "-password"); // Fetch all but hide passwords
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  } catch (err) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Error fetching users", error: err.message }));
  }
};

// ============================
// MENU CONTROLS
// ============================

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
  getAllUsers, // Added this to exports
  getAllMenuItems,
  createMenuItem,
  getAllReservations,
  getAllGalleryItems,
};