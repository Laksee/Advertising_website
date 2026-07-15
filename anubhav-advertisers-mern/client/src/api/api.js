import axios from "axios";
import * as fallback from "../data/fallbackData";

// In dev, Vite proxies /api/* to the Express server (see vite.config.js).
// In production, set VITE_API_URL to the deployed API's base URL.
const baseURL = import.meta.env.VITE_API_URL || "/api";

const client = axios.create({ baseURL, timeout: 8000 });

// Wraps a GET call: if the API or MongoDB isn't up yet, fall back to the
// bundled demo data instead of showing a broken page.
async function getOrFallback(path, fallbackData) {
  try {
    const { data } = await client.get(path);
    if (data?.success && Array.isArray(data.data) && data.data.length > 0) {
      return data.data;
    }
    return fallbackData;
  } catch (err) {
    console.warn(`Using fallback data for ${path} (API not reachable yet).`);
    return fallbackData;
  }
}

export function getServices() {
  return getOrFallback("/services", fallback.services);
}

export function getStats() {
  return getOrFallback("/stats", fallback.stats);
}

export function getInstallations() {
  return getOrFallback("/installations", fallback.workGallery);
}

export function getTestimonials() {
  return getOrFallback("/testimonials", fallback.testimonials);
}

export function getFaqs() {
  return getOrFallback("/faqs", fallback.faqs);
}

export function getProcess() {
  return getOrFallback("/process", fallback.process);
}

// Contact submissions are not silently swallowed: the form needs to know
// whether the message actually reached the server.
export async function submitContact(payload) {
  const { data } = await client.post("/contact", payload);
  return data;
}
