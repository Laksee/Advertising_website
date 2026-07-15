// Populates MongoDB with the demo content for Anubhav Advertisers.
// Run with: npm run seed   (from inside /server)
// Safe to re-run: it wipes the demo collections first, then reinserts.

require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("../config/db");

const Service = require("../models/Service");
const Stat = require("../models/Stat");
const Installation = require("../models/Installation");
const Testimonial = require("../models/Testimonial");
const Faq = require("../models/Faq");
const ProcessStep = require("../models/ProcessStep");

const { services, stats, installations, testimonials, faqs, process: processSteps } = require("../data/seedData");

async function seed() {
  await connectDB();

  console.log("Clearing existing demo content...");
  await Promise.all([
    Service.deleteMany({}),
    Stat.deleteMany({}),
    Installation.deleteMany({}),
    Testimonial.deleteMany({}),
    Faq.deleteMany({}),
    ProcessStep.deleteMany({}),
  ]);

  console.log("Inserting fresh demo content...");
  await Promise.all([
    Service.insertMany(services),
    Stat.insertMany(stats),
    Installation.insertMany(installations),
    Testimonial.insertMany(testimonials),
    Faq.insertMany(faqs),
    ProcessStep.insertMany(processSteps),
  ]);

  console.log("Seed complete:");
  console.log(`  ${services.length} services`);
  console.log(`  ${stats.length} stats`);
  console.log(`  ${installations.length} installations`);
  console.log(`  ${testimonials.length} testimonials`);
  console.log(`  ${faqs.length} faqs`);
  console.log(`  ${processSteps.length} process steps`);

  await mongoose.connection.close();
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
