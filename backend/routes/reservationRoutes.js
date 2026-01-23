const { getReservations, createReservation, updateReservationStatus, deleteReservation } = require("../controllers/reservationController");

const reservationRoutes = async (req, res) => {
  if (req.url === "/api/reservations" && req.method === "GET") {
    await getReservations(req, res);
    return true;
  }
  if (req.url === "/api/reservations" && req.method === "POST") {
    await createReservation(req, res);
    return true;
  }
  if (req.url === "/api/reservations/status" && req.method === "PUT") {
    await updateReservationStatus(req, res);
    return true;
  }
  if (req.url.startsWith("/api/reservations/") && req.method === "DELETE") {
    await deleteReservation(req, res);
    return true;
  }
  return false;
};

module.exports = reservationRoutes;