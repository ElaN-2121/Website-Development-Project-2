const { getContacts, createContactMessage } = require("../controllers/contactController");

const contactRoutes = async (req, res) => {
  if (req.url === "/api/contact" && req.method === "GET") {
    await getContacts(req, res);
    return true;
  }
  if (req.url === "/api/contact" && req.method === "POST") {
    await createContactMessage(req, res);
    return true;
  }
  return false;
};

module.exports = contactRoutes;
