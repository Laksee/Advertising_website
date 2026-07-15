const express = require("express");
const Testimonial = require("../models/Testimonial");
const makeContentController = require("../controllers/contentController");

const router = express.Router();
router.get("/", makeContentController(Testimonial));

module.exports = router;
