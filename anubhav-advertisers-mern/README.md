# Anubhav Advertisers — MERN Demo Site

A demo marketing website for a fictional out-of-home (OOH) advertising
company, **Anubhav Advertisers** ("anubhav" is Hindi for "experience") — built
as a full MERN stack app: MongoDB + Express API on the backend, React (Vite)
on the frontend.

Anubhav is entirely offline: hoardings, billboards, banners, wall paintings,
and transit branding — not digital/social ads. The design leans into that:
crop marks, a rotating registration mark (the crosshair-in-circle printers
use to align colour plates for large-format print), CMYK spot colours, and a
dark "billboard lit up at night" hero with a cursor-follow spotlight and a
parallax city skyline. Section headlines animate letter-by-letter or
word-by-word into place on scroll instead of just appearing.

The public "work" section is a grid of flip cards ("flash cards"): tap or
click a card to flip it and see the client, location, and exact spec behind
each installed hoarding/banner/wall wrap.

## Stack

- **Frontend:** React 18 + Vite, plain CSS (no framework), axios for API calls
- **Backend:** Node.js + Express, Mongoose (MongoDB)
- **Database:** MongoDB (local or Atlas)

## Project structure

```
anubhav-advertisers-mern/
├── server/                  Express API
│   ├── config/db.js         Mongoose connection
│   ├── models/               Service, Stat, Installation, Testimonial, Faq, ProcessStep, Contact
│   ├── controllers/          Route handlers
│   ├── routes/                /api/... route definitions
│   ├── data/seedData.js      Demo content
│   ├── seed/seed.js          Populates MongoDB with demo content
│   └── server.js             App entry point
└── client/                   React app
    └── src/
        ├── api/api.js         Axios calls with fallback to bundled demo data
        ├── data/fallbackData.js
        ├── hooks/             useScrollReveal, useCountUp
        └── components/        Navbar, Hero, Marquee, Stats, Services, WhyUs,
                                Process, WorkGallery (flash cards), Testimonials,
                                FAQ, CTABanner, Contact, Footer, AnimatedText
```

## Prerequisites

- Node.js 18+
- A MongoDB instance — either:
  - **Local:** [install MongoDB Community](https://www.mongodb.com/docs/manual/administration/install-community/) and run `mongod`, or
  - **Atlas:** a free cluster at [mongodb.com/atlas](https://www.mongodb.com/atlas) — grab its connection string

## Setup

1. **Install dependencies** (from the project root):

   ```bash
   npm run install:all
   ```

   (or manually: `cd server && npm install`, then `cd ../client && npm install`)

2. **Configure the server:**

   ```bash
   cd server
   cp .env.example .env
   ```

   Edit `.env` and set `MONGODB_URI` to your local or Atlas connection string.

3. **Seed the database** with demo content (services, stats, installations,
   testimonials, FAQs, process steps):

   ```bash
   npm run seed
   ```

   You should see a summary of how many documents were inserted. Re-run this
   any time you want to reset the demo content back to the defaults.

4. **Configure the client (optional):** the Vite dev server already proxies
   `/api/*` to `http://localhost:5000`, so no setup is needed for local dev.
   `client/.env.example` is only relevant if you deploy the API somewhere
   else — copy it to `.env` and set `VITE_API_URL`.

## Running it

From the project root, run both servers together:

```bash
npm run dev
```

Or run them separately, in two terminals:

```bash
# Terminal 1
cd server && npm run dev      # http://localhost:5000

# Terminal 2
cd client && npm run dev      # http://localhost:5173
```

Open **http://localhost:5173**. The page renders instantly with bundled demo
content, then swaps in live data from the API once it responds — so the site
never looks broken even if MongoDB or the API happen to still be starting up.

## API reference

All endpoints are prefixed with `/api`.

| Method | Route            | Description                                     |
| ------ | ---------------- | ------------------------------------------------ |
| GET    | `/health`        | Health check                                     |
| GET    | `/services`      | List of agency services                         |
| GET    | `/stats`         | Headline stats (years running, sites live, etc.) |
| GET    | `/installations` | The flash-card work gallery (hoardings, banners, wall media, transit) |
| GET    | `/testimonials`  | Client quotes                                    |
| GET    | `/faqs`          | Frequently asked questions                       |
| GET    | `/process`       | "How we work" steps                              |
| POST   | `/contact`       | Submit a contact form enquiry                    |
| GET    | `/contact`       | List submitted enquiries (demo-only, no auth)    |

`POST /api/contact` expects:

```json
{
  "name": "Jordan Blake",
  "email": "jordan@company.com",
  "company": "Company name",
  "budget": "₹5L – ₹15L / month",
  "message": "Tell us about the format and city you're thinking of."
}
```

## Notes

- This is a demo: the `/api/contact` GET listing has no authentication, and
  there's no email/CRM integration on submission — enquiries are just saved
  to MongoDB. Swap in a real notification step before using this in
  production.
- All content (agency name, services, installations, testimonials, contact
  details) is fictional, written for this demo. The flash-card photos are
  placeholder stock images loaded from `picsum.photos`, tinted to match the
  site's colour system — swap `imageSeed` in `server/data/seedData.js` (or
  the image URL in `WorkGallery.jsx`) for real installation photography.
- Fonts (Bebas Neue, Work Sans, Space Mono) load from Google Fonts — an
  internet connection is needed for them to render; the layout still works
  with system font fallbacks otherwise.
