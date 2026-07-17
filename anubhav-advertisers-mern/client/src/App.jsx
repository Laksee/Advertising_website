import { useEffect, useState } from "react";
import { getServices, getStats, getInstallations, getTestimonials, getFaqs, getProcess } from "./api/api";
import * as fallback from "./data/fallbackData";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Stats from "./components/Stats";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Process from "./components/Process";
import WorkGallery from "./components/WorkGallery";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTABanner from "./components/CTABanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SmoothScroll from "./components/smoothScroll";
import ClientShowcase from "./components/ClientShowcase/ClientShowcase";

export default function App() {
  // Render immediately with bundled demo content, then swap in whatever
  // the API returns. This keeps the page fast and never empty, whether or
  // not the backend/MongoDB happen to be running.
  const [services, setServices] = useState(fallback.services);
  const [stats, setStats] = useState(fallback.stats);
  const [installations, setInstallations] = useState(fallback.workGallery);
  const [testimonials, setTestimonials] = useState(fallback.testimonials);
  const [faqs, setFaqs] = useState(fallback.faqs);
  const [process, setProcess] = useState(fallback.process);


  useEffect(() => {
    getServices().then(setServices);
    getStats().then(setStats);
    getInstallations().then(setInstallations);
    getTestimonials().then(setTestimonials);
    getFaqs().then(setFaqs);
    getProcess().then(setProcess);
  }, []);

  return (
    <>
      <SmoothScroll></SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Stats stats={stats} />
        <Services services={services} />
        <WhyUs strengths={fallback.strengths} />
        <Process steps={process} />
        <WorkGallery items={installations} />
        <Testimonials testimonials={testimonials} />
        <ClientShowcase />
        <FAQ faqs={faqs} />
        <CTABanner />
        <Contact />
      </main>
      <Footer />

    </>
  );
}
