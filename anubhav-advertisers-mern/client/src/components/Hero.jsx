import { useEffect, useRef } from "react";
import AnimatedText from "./AnimatedText";
import useParallax from "../hooks/useParallax";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export default function Hero() {
  const skylineRef = useRef(null);
  const heroRef = useRef(null);


  // Cursor spotlight: a soft glow that follows the pointer, like a beam
  // sweeping a hoarding lit up at night. Mutates the DOM directly instead of
  // going through React state, so it stays smooth on every mousemove.
  function handleMouseMove(e) {
    const node = heroRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    node.style.setProperty("--x", `${x}%`);
    node.style.setProperty("--y", `${y}%`);
  }

  // Skyline parallax: the city silhouette drifts slightly slower than the
  // page scrolls, reinforcing "the city is our canvas."
  useEffect(() => {
    if (window.matchMedia(REDUCED_MOTION_QUERY).matches) return;

    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (skylineRef.current) {
          skylineRef.current.style.transform = `translateY(${window.scrollY * 0.12}px)`;
        }
        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero" id="top" ref={heroRef} onMouseMove={handleMouseMove}>
      <div className="hero__spotlight" aria-hidden="true" />

      <svg
        ref={skylineRef}
        className="hero__skyline"
        viewBox="0 0 1200 160"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <rect x="0" y="70" width="60" height="90" />
        <rect x="55" y="40" width="45" height="120" />
        <rect x="95" y="90" width="70" height="70" />
        <rect x="160" y="55" width="40" height="105" />
        <rect x="195" y="100" width="90" height="60" />
        <rect x="280" y="30" width="50" height="130" />
        <rect x="325" y="75" width="65" height="85" />
        <rect x="385" y="50" width="40" height="110" />
        <rect x="420" y="95" width="100" height="65" />
        <rect x="515" y="20" width="55" height="140" />
        <rect x="565" y="65" width="45" height="95" />
        <rect x="605" y="105" width="80" height="55" />
        <rect x="680" y="45" width="50" height="115" />
        <rect x="725" y="85" width="70" height="75" />
        <rect x="790" y="35" width="45" height="125" />
        <rect x="830" y="100" width="95" height="60" />
        <rect x="920" y="60" width="50" height="100" />
        <rect x="965" y="90" width="65" height="70" />
        <rect x="1025" y="25" width="45" height="135" />
        <rect x="1065" y="75" width="60" height="85" />
        <rect x="1120" y="100" width="80" height="60" />
      </svg>

      <div className="container hero__inner">
        <div className="hoarding-frame">
          <span className="hoarding-frame__tag">D 49,Sector 10, Noida</span>

          <p className="eyebrow">Bringing Your Brand to Life with Premium Printing in India</p>

          <h1 className="hero__headline">
            <AnimatedText as="span" className="hero__headline-line" text="YOU CAN'T SCROLL" splitBy="char" stagger={0.018} />
            <AnimatedText
              as="span"
              className="hero__headline-line hero__headline-line--accent"
              text="PAST A BILLBOARD."
              splitBy="char"
              stagger={0.018}
              startDelay={0.45}
            />
          </h1>

          <p className="hero__sub">
            With the rapidly changing world, first impressions are a priority. Anubhav Advertiser steps in as a game-changer. As a premium printing and branding agency, we offer a wide variety of services that ensure your satisfaction with our craft and quality. From web design, marketing, and branding to printing and event management.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary " href="#contact">
              Contact us
            </a>
            <a className="btn btn--outline" href="#work">
              See Our Work →
            </a>
          </div>

          <span className="hoarding-frame__pole hoarding-frame__pole--left" aria-hidden="true" />
          <span className="hoarding-frame__pole hoarding-frame__pole--right" aria-hidden="true" />
        </div>
        <span className="hoarding-frame__ground" aria-hidden="true" />
      </div>
    </section>
  );
}
