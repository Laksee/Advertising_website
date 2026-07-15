const express = require("express");
const { createContact, listContacts } = require("../controllers/contactController");

const router = express.Router();
router.post("/", createContact);
router.get("/", listContacts);

module.exports = router;
