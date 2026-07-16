import { useState } from "react";
import { submitContact } from "../api/api";
import AnimatedText from "./AnimatedText";

const BUDGET_OPTIONS = [
  "Not sure yet",
  "Under ₹5L / month",
  "₹5L – ₹15L / month",
  "₹15L – ₹40L / month",
  "₹40L+ / month",
];

const EMPTY_FORM = { name: "", email: "", company: "", budget: BUDGET_OPTIONS[0], message: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      await submitContact(form);
      setStatus("success");
      setForm(EMPTY_FORM);
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err.response?.data?.error || "Couldn't reach the server. Make sure the API is running and try again."
      );
    }
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__info">
            <p className="eyebrow">GET IN TOUCH</p>
            <AnimatedText as="h2" className="section-title" text="Tell Us Where You Want To Be Seen" />
            <p className="lede">
              Share a few details and a site manager will follow up with real options, not a form-letter reply.
            </p>

            <ul className="contact__details">
              <li>Anubhav Advertisers</li>
              <li>D 49, 1st floor, D Block, Sector 10, Noida, Uttar Pradesh 201301</li>
              <li>Sites live in 18 cities across India</li>
              <li>
                <a href="tel:+919810022456">+91 98100 22456</a>
              </li>
              <li>
                <a href="mailto:hello@anubhavadvertisers.in">hello@anubhavadvertisers.in</a>
              </li>
            </ul>

            <div className="contact__social">
              <a href="#" onClick={(e) => e.preventDefault()}>
                Instagram
              </a>
              <a href="#" onClick={(e) => e.preventDefault()}>
                LinkedIn
              </a>
              <a href="#" onClick={(e) => e.preventDefault()}>
                X
              </a>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="field-row">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Jordan Blake" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="jordan@company.com" />
              </div>
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" type="text" value={form.company} onChange={handleChange} placeholder="Company name" />
              </div>
              <div className="field">
                <label htmlFor="budget">Monthly budget</label>
                <select id="budget" name="budget" value={form.budget} onChange={handleChange}>
                  {BUDGET_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="field">
              <label htmlFor="message">What format and city are you thinking of?</label>
              <textarea
                id="message"
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="e.g. a highway hoarding near Gurugram, or bus branding across Mumbai."
              />
            </div>

            <button className="btn btn--primary btn--block" type="submit" disabled={status === "submitting"}>
              {status === "submitting" ? "Sending…" : "Send Enquiry"}
            </button>

            {status === "success" && (
              <p className="form-msg form-msg--ok">Thanks — we usually reply within one business day.</p>
            )}
            {status === "error" && <p className="form-msg form-msg--error">{errorMsg}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
