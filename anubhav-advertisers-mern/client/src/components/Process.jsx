import AnimatedText from "./AnimatedText";
import useParallax from "../hooks/useParallax";
import { useRef } from "react";
import useSectionReveal from "../hooks/useSectionReveal";

export default function Process({ steps }) {
  const sectionRef = useRef(null);
  useSectionReveal(sectionRef);
  return (
    <section
      ref={sectionRef}
      className="section"
      id="process"
    >
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">HOW WE WORK</p>
          <AnimatedText as="h2" className="section-title" text="Five Steps, One Owner" />
          <p className="lede">The same strategist walks every campaign through all five stages, so nothing gets handed off and lost.</p>
        </div>

        <ol className="process__list">
          {steps.map((step) => (
            <li key={step.step} className="process__step">
              <span className="process__num">0{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
