const express = require("express");
const Installation = require("../models/Installation");
const makeContentController = require("../controllers/contentController");

const router = express.Router();
router.get("/", makeContentController(Installation));

module.exports = router;
