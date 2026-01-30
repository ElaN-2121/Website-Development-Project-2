const Reservation = require("../models/Reservation");
const getReqData = require("../utils/parseBody");

//get
const getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find().sort({ createdAt: -1 });
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(reservations));
  } catch (err) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: err.message }));
  }
};

//post
const createReservation = async (req, res) => {
  try {
    const body = await getReqData(req);
    const reservation = await Reservation.create({ ...body, status: "Pending" });
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(reservation));
  } catch (err) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: err.message }));
  }
};

//update
const updateReservationStatus = async (req, res) => {
  try {
    const body = await getReqData(req);
    const { id, status } = body;
    const updated = await Reservation.findByIdAndUpdate(id, { status }, { new: true });
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(updated));
  } catch (err) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: err.message }));
  }
};

//delete
const deleteReservation = async (req, res) => {
  try {
    const urlParts = req.url.split("/");
    const id = urlParts[urlParts.length - 1];
    await Reservation.findByIdAndDelete(id);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Deleted successfully" }));
  } catch (err) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: err.message }));
  }
};

module.exports = { getReservations, createReservation, updateReservationStatus, deleteReservation };