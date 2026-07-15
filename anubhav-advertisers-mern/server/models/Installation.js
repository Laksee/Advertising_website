const mongoose = require("mongoose");

// A single physical advertising install: a hoarding, banner, wall wrap,
// transit wrap, etc. Powers the "flash card" work gallery on the public site.
const installationSchema = new mongoose.Schema(
  {
    client: { type: String, required: true, trim: true },
    project: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    spec: { type: String, required: true, trim: true },
    swatch: {
      type: String,
      enum: ["cyan", "magenta", "yellow", "ink"],
      default: "ink",
    },
    // Seeds a stable placeholder photo (picsum.photos/seed/{seed}/...).
    // Swap for a real uploaded photo URL/path once you have installation photography.
    imageSeed: { type: String, required: true, trim: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Installation", installationSchema);
