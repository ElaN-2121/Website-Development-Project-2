const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: String, required: true },
  category: String,
  rating: Number,
  image: String
}, { timestamps: true });

module.exports = mongoose.model("MenuItem", menuItemSchema);
