const Testimonial = require("../models/Testimonial");
const getReqData = require("../utils/parseBody");

const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(testimonials));
  } catch(err) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: err.message }));
  }
};

const createTestimonial = async (req, res) => {
  try {
    const body = await getReqData(req);
    const testimonial = await Testimonial.create(body);
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(testimonial));
  } catch(err) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: err.message }));
  }
};

module.exports = { getTestimonials, createTestimonial };
