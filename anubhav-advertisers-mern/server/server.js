require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorHandler");

const servicesRouter = require("./routes/services");
const statsRouter = require("./routes/stats");
const installationsRouter = require("./routes/installations");
const testimonialsRouter = require("./routes/testimonials");
const faqsRouter = require("./routes/faqs");
const processRouter = require("./routes/process");
const contactRouter = require("./routes/contact");

const app = express();

// --- middleware ---------------------------------------------------------
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  })
);
app.use(express.json());
app.use(morgan("dev"));

// --- health check --------------------------------------------------------
app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "Anubhav Advertisers API is running." });
});

// --- routes ---------------------------------------------------------------
app.use("/api/services", servicesRouter);
app.use("/api/stats", statsRouter);
app.use("/api/installations", installationsRouter);
app.use("/api/testimonials", testimonialsRouter);
app.use("/api/faqs", faqsRouter);
app.use("/api/process", processRouter);
app.use("/api/contact", contactRouter);

// --- fallbacks -------------------------------------------------------------
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

async function start() {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Anubhav Advertisers API listening on http://localhost:${PORT}`);
  });
}

start();
