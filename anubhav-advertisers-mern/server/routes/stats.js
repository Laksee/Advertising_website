const express = require("express");
const Stat = require("../models/Stat");
const makeContentController = require("../controllers/contentController");

const router = express.Router();
router.get("/", makeContentController(Stat));

module.exports = router;
