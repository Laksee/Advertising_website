const mongoose = require("mongoose");

// Connects to MongoDB using the URI from the environment.
// Fails loudly and exits on purpose: a demo with a silently broken DB layer
// is worse than one that tells you immediately what to fix.
async function connectDB() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.error("Missing MONGODB_URI. Copy server/.env.example to server/.env and set it.");
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    console.log(`MongoDB connected: ${mongoose.connection.host}/${mongoose.connection.name}`);
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  }
}

module.exports = connectDB;
