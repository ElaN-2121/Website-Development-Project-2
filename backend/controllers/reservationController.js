const Reservation = require("../models/Reservation");
const getReqData = require("../utils/parseBody");

const getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(reservations));
  } catch (err) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: err.message }));
  }
};

const createReservation = async (req, res) => {
  try {
    const body = await getReqData(req);
    const reservation = await Reservation.create(body);
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(reservation));
  } catch (err) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: err.message }));
  }
};

module.exports = { getReservations, createReservation };
