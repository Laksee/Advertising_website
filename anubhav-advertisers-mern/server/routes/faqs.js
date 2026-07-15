const express = require("express");
const Faq = require("../models/Faq");
const makeContentController = require("../controllers/contentController");

const router = express.Router();
router.get("/", makeContentController(Faq));

module.exports = router;
