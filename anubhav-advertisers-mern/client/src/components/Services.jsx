import CropMarks from "./CropMarks";
import AnimatedText from "./AnimatedText";
import useScrollReveal from "../hooks/useScrollReveal";
import useParallax from "../hooks/useParallax";
import { useRef } from "react";
import useSectionReveal from "../hooks/useSectionReveal";

function ServiceCard({ service }) {
  const [ref, isVisible] = useScrollReveal();
  return (
    <article ref={ref} className={`service-card crop-frame reveal ${isVisible ? "is-visible" : ""}`}>
      <CropMarks />
      <span className="service-card__code">{service.code}</span>
      <h3>{service.name}</h3>
      <p>{service.summary}</p>
    </article>
  );
}

export default function Services({ services }) {
  const sectionRef = useRef(null);

  useSectionReveal(sectionRef);
  return (
    <section
      ref={sectionRef}
      className="section"
      id="services"
    >
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">SRV / 01–06</p>
          <AnimatedText as="h2" className="section-title" text="What We Do" />
          <p className="lede">Six disciplines, one strategist coordinating all of them so your brand says one thing everywhere it shows up.</p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
