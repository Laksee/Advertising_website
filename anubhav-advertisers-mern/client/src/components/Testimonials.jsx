import { useEffect, useState } from "react";
import AnimatedText from "./AnimatedText";

export default function Testimonials({ testimonials }) {
  const [index, setIndex] = useState(0);

  // Auto-advance every 7s, paused implicitly whenever the user navigates
  // manually (the interval just resets on the next render).
  useEffect(() => {
    if (testimonials.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(id);
  }, [testimonials.length, index]);

  if (testimonials.length === 0) return null;

  const current = testimonials[index];

  function goTo(i) {
    setIndex(i);
  }

  function prev() {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }

  function next() {
    setIndex((i) => (i + 1) % testimonials.length);
  }

  return (
    <section className="section section--dark" id="testimonials">
      <div className="container">
        <div className="section-head section-head--center">
          <p className="eyebrow">CLIENT WORD</p>
          <AnimatedText as="h2" className="section-title" text="Don't Take Our Word For It" />
        </div>

        <blockquote className="testimonial-card">
          <p className="testimonial-card__quote">&ldquo;{current.quote}&rdquo;</p>
          <footer className="testimonial-card__author">
            {current.name} <span>— {current.role}, {current.company}</span>
          </footer>
        </blockquote>

        <div className="testimonial-nav">
          <button className="testimonial-arrow" onClick={prev} aria-label="Previous testimonial">
            ←
          </button>
          <div className="testimonial-dots">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                className={i === index ? "is-active" : ""}
                aria-label={`Show testimonial from ${t.name}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <button className="testimonial-arrow" onClick={next} aria-label="Next testimonial">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
