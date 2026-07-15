const Contact = require("../models/Contact");

// POST /api/contact
// Validates the incoming enquiry, saves it, and returns a plain confirmation.
// This is a demo endpoint: no email/CRM integration, just persistence you can
// swap out for a real notification service later.
async function createContact(req, res, next) {
  try {
    const { name, email, company, budget, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "Name, email, and message are required.",
      });
    }

    const contact = await Contact.create({ name, email, company, budget, message });

    res.status(201).json({
      success: true,
      data: {
        id: contact._id,
        name: contact.name,
        createdAt: contact.createdAt,
      },
      message: "Thanks — we usually reply within one business day.",
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const firstError = Object.values(err.errors)[0]?.message || "Invalid submission.";
      return res.status(400).json({ success: false, error: firstError });
    }
    next(err);
  }
}

// GET /api/contact  (simple admin-style listing, newest first — no auth in this demo)
async function listContacts(req, res, next) {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, count: contacts.length, data: contacts });
  } catch (err) {
    next(err);
  }
}

module.exports = { createContact, listContacts };
