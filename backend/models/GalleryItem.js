const mongoose = require("mongoose");

const galleryItemSchema = new mongoose.Schema({
  type: { type: String, enum: ["image","video"], required: true },
  url: { type: String, required: true },
  category: String,
  caption: String
}, { timestamps: true });

module.exports = mongoose.model("GalleryItem", galleryItemSchema);
