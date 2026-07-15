const express = require("express");
const ProcessStep = require("../models/ProcessStep");
const makeContentController = require("../controllers/contentController");

const router = express.Router();
router.get("/", makeContentController(ProcessStep, "step"));

module.exports = router;
