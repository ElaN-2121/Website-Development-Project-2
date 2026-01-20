const ContactMessage = require("../models/ContactMessage");
const getReqData = require("../utils/parseBody");

const getContacts = async (req, res) => {
  try {
    const messages = await ContactMessage.find();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(messages));
  } catch(err) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: err.message }));
  }
};

const createContactMessage = async (req, res) => {
  try {
    const body = await getReqData(req);
    const message = await ContactMessage.create(body);
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(message));
  } catch(err) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: err.message }));
  }
};

module.exports = { getContacts, createContactMessage };
