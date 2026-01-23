const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  date: Date,
  time: String,
  guests: Number,
  specialRequest: String,
  status: { type: String, default: "Pending" } // Add this line
}, { timestamps: true });

module.exports = mongoose.model("Reservation", reservationSchema);
