const { getReservations, createReservation } = require("../controllers/reservationController");

const reservationRoutes = async (req, res) => {
  if (req.url === "/api/reservations" && req.method === "GET") {
    await getReservations(req, res);
    return true;
  }
  if (req.url === "/api/reservations" && req.method === "POST") {
    await createReservation(req, res);
    return true;
  }
  return false;
};

module.exports = reservationRoutes;
