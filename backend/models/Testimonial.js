const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
  name: String,
  comment: String,
  rating: Number,
  image: String
}, { timestamps: true });

module.exports = mongoose.model("Testimonial", testimonialSchema);
