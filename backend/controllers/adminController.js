const Menu = require("../models/MenuItem");
const Reservation = require("../models/Reservation");
const Gallery = require("../models/GalleryItem");

const User = require("../models/User");
const getReqData = require("../utils/parseBody");
const bcrypt = require("bcryptjs");

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
    res.end(
      JSON.stringify({
        message: "Error fetching menu items",
        error: err.message,
      }),
    );
  }
};

// Create new menu item
const createMenuItem = async (req, res) => {
  try {
    const { name, price, category, description, image } = req.body;
    const newItem = await Menu.create({
      name,
      price,
      category,
      description,
      image,
    });
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(newItem));
  } catch (err) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Error creating menu item",
        error: err.message,
      }),
    );
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
    res.end(
      JSON.stringify({
        message: "Error fetching reservations",
        error: err.message,
      }),
    );
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
    res.end(
      JSON.stringify({
        message: "Error fetching gallery items",
        error: err.message,
      }),
    );
  }
};

// ============================
// ADMIN PROFILE CONTROLS
// ============================

// GET admin profile
const getAdminProfile = async (req, res) => {
  try {
    const adminId = req.user.id; // set by adminMiddleware
    const admin = await User.findById(adminId).select("name email");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({ name: admin?.name || "", email: admin?.email || "" }),
    );
  } catch (err) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Server error", error: err.message }));
  }
};

// UPDATE admin profile
const updateAdminProfile = async (req, res) => {
  try {
    const adminId = req.user.id;
    const body = await getReqData(req);

    const updateData = {
      email: body.email,
      name: body.name,
    };

    // Optional password update
    if (body.password) {
      const salt = await bcrypt.genSalt(10);
      updateData.password = await bcrypt.hash(body.password, salt);
    }

    const updatedAdmin = await User.findByIdAndUpdate(adminId, updateData, {
      new: true,
    }).select("-password");

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Admin updated successfully",
        admin: updatedAdmin,
      }),
    );
  } catch (err) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Server error", error: err.message }));
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
  updateAdminProfile,
  getAdminProfile,
};
