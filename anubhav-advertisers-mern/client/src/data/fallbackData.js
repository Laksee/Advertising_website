// Mirrors server/data/seedData.js. Used the moment the app loads (so the page
// never shows empty placeholders) and again if any API call fails — e.g. the
// backend or MongoDB isn't running yet. Swapped out silently once the real
// API responds.

import pic1 from "../photos/pic1.png"
import pic2 from "../photos/pic2.png"
import pic3 from "../photos/pic3.png"
import pic4 from "../photos/pic4.png"
import pic5 from "../photos/pic5.png"
import pic6 from "../photos/pic6.png"

export const services = [
  {
    code: "SRV / 01",
    name: "Hoardings & Billboards",
    summary:
      "Large-format unipoles, gantries, and highway billboards, planned for maximum daily eyeballs and booked on the traffic corridors that actually matter.",
  },
  {
    code: "SRV / 02",
    name: "Banners & Flex Boards",
    summary:
      "Quick-turnaround flex printing and banner installs for launches, sales, and local promotions — up within days, not weeks.",
  },
  {
    code: "SRV / 03",
    name: "Wall Paintings & Wall Wraps",
    summary:
      "Hand-painted murals and vinyl wall wraps that turn a bare wall into brand real estate people actually stop and look at.",
  },
  {
    code: "SRV / 04",
    name: "Transit & Vehicle Branding",
    summary:
      "Bus backs, auto-rickshaw wraps, and railway station media that travel through the city carrying your brand with them.",
  },
  {
    code: "SRV / 05",
    name: "Mall & Kiosk Branding",
    summary:
      "Standees, kiosks, and entrance takeovers placed where footfall and dwell time inside the mall are highest.",
  },
  {
    code: "SRV / 06",
    name: "Site Survey & Permissions",
    summary:
      "Location scouting, landlord negotiation, and municipal licence handling — so your hoarding goes live legally, not stuck in paperwork.",
  },
];

export const stats = [
  { label: "YEARS OF EXPERIENCE", value: "12" },
  { label: "SUCCESSFULL PROJECTS", value: "340+" },
  { label: "HAPPY CLIENTS", value: "100+" },
  { label: "Client Retention", value: "94%" },
];

// "Flash cards" — real installs, shown as flip cards on the public work page.
export const workGallery = [
  {
    client: "Kavani Foods",
    project: "NH-8 Highway Hoarding",
    location: "Gurugram, Haryana",
    spec: "40 × 20 ft · Unipole · 6 Months",
    swatch: "cyan",

    photos: [
      pic1
    ],
  },

  {
    client: "Northline Footwear",
    project: "Mall Entrance Takeover",
    location: "Select Citywalk, Delhi",
    spec: "Entrance Arch + 2 Standees · 3 Months",
    swatch: "magenta",

    photos: [
      pic2
    ],
  },

  {
    client: "Verano Skincare",
    project: "Metro Station Wall Wrap",
    location: "Rajiv Chowk, New Delhi",
    spec: "60 × 12 ft Wall Wrap · 12 Months",
    swatch: "yellow",

    photos: [
      pic3
    ],
  },

  {
    client: "Circuit Bikes",
    project: "Auto-Rickshaw Fleet Branding",
    location: "Bengaluru",
    spec: "200 Autos · Full Wrap · 3 Months",
    swatch: "ink",

    photos: [pic4]
  },

  {
    client: "Haven Realty",
    project: "Site Boundary Wall Painting",
    location: "Sector 150, Noida",
    spec: "220 ft Hand-Painted Wall · Permanent",
    swatch: "magenta",

    photos: [pic5]
  },

  {
    client: "Pulsewear Fitness",
    project: "Bus Back Branding",
    location: "Mumbai",
    spec: "60 Buses · Bus-Back Panel · 6 Months",
    swatch: "cyan",

    photos: [pic6] 
  },
];

export const testimonials = [
  {
    quote: "Anubhav found us a hoarding site we'd never have spotted ourselves. Footfall past our store tripled the week it went up.",
    name: "Aditi Rao",
    role: "Marketing Director",
    company: "Kavani Foods",
  },
  {
    quote: "Every hoarding comes with a photo the same day it's installed. I've never once had to wonder if it's actually up.",
    name: "Marcus Ohene",
    role: "Founder",
    company: "Circuit Bikes",
  },
  {
    quote: "We'd worked with three vendors before Anubhav. None of them handled the municipal permits without us having to chase them.",
    name: "Leah Fontaine",
    role: "CMO",
    company: "Northline Footwear",
  },
  {
    quote: "Our wall wrap at Rajiv Chowk still looks sharp eight months in — they maintain it without us ever having to ask.",
    name: "Priya Menon",
    role: "Brand Lead",
    company: "Verano Skincare",
  },
];

export const faqs = [
  {
    question: "What formats do you handle?",
    answer:
      "Unipoles, gantries, and hoardings, flex banners, wall paintings and wraps, transit branding on buses and autos, and mall or kiosk media — across 18 cities.",
  },
  {
    question: "How do you choose a site?",
    answer:
      "A physical survey for footfall, sightlines, and approach distance, checked against competing clutter nearby, then landlord or authority negotiation.",
  },
  {
    question: "Do you handle permissions?",
    answer:
      "Yes. We secure municipal and RTO permissions and pay the statutory fees as part of the package, so you're never the one filing paperwork.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Standard hoarding and banner installs run 5 to 7 days from creative approval, permit-dependent. Wall paintings take 3 to 10 days depending on scale.",
  },
  {
    question: "What's the minimum campaign duration?",
    answer: "Most hoarding bookings run in 1, 3, or 6-month blocks. Banners and transit branding can run shorter.",
  },
  {
    question: "How do we know it's actually installed?",
    answer: "Every site gets geotagged photo proof on the day of install, plus photos from every scheduled maintenance check after that.",
  },
];

export const process = [
  { step: 1, title: "Survey", description: "We scout locations for footfall, visibility, and sightlines, and shortlist sites that fit the brief." },
  { step: 2, title: "Design", description: "In-house designers build creative sized correctly for the format and the real viewing distance." },
  { step: 3, title: "Permit & Print", description: "We handle municipal permissions while your creative goes to large-format print." },
  { step: 4, title: "Install", description: "Our crews mount the hoarding or banner and send geotagged photo proof the same day." },
  { step: 5, title: "Maintain", description: "Scheduled site checks and reprints keep the creative looking sharp for the full campaign." },
];

export const strengths = [
  "Sites hand-scouted for real footfall and sightlines, not just availability",
  "In-house design and large-format printing, no third-party delays",
  "Municipal permissions and licensing handled end to end",
  "Photo-verified installation on every single site",
  "One dedicated site manager per account",
  "340+ hoardings live and maintained across 18 cities",
];
