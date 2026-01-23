const { getContacts, createContactMessage, deleteContact } = require("../controllers/contactController");

const contactRoutes = async (req, res) => {
  const isContactUrl = req.url === "/api/contact" || req.url === "/contact";

  if (isContactUrl && req.method === "GET") {
    await getContacts(req, res);
    return true;
  }
  
  if (isContactUrl && req.method === "POST") {
    await createContactMessage(req, res);
    return true;
  }

  if ((req.url.startsWith("/api/contact/") || req.url.startsWith("/contact/")) && req.method === "DELETE") {
    await deleteContact(req, res);
    return true;
  }

  return false;
};

module.exports = contactRoutes;