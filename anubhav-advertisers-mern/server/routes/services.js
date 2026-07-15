const express = require("express");
const Service = require("../models/Service");
const makeContentController = require("../controllers/contentController");

const router = express.Router();
router.get("/", makeContentController(Service));

module.exports = router;
