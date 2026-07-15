const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Enter a valid email address"],
    },
    company: { type: String, trim: true },
    budget: {
      type: String,
      enum: [
        "Under ₹5L / month",
        "₹5L – ₹15L / month",
        "₹15L – ₹40L / month",
        "₹40L+ / month",
        "Not sure yet",
      ],
      default: "Not sure yet",
    },
    message: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: ["new", "contacted", "closed"],
      default: "new",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
