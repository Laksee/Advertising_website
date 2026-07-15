import RegistrationMark from "./RegistrationMark";
import AnimatedText from "./AnimatedText";

export default function WhyUs({ strengths }) {
  return (
    <section className="section section--tight">
      <div className="container">
        <div className="why__grid">
          <div className="why__head">
            <p className="eyebrow">WHY ANUBHAV</p>
            <AnimatedText as="h2" className="section-title" text="Why Brands Choose Anubhav" />
            <p className="lede">
              Most vendors handle one part of an OOH campaign and outsource the rest. Anubhav handles site
              scouting, permissions, printing, and installation under one roof, with one point of contact.
            </p>
          </div>

          <ul className="why__list">
            {strengths.map((strength) => (
              <li key={strength}>
                <RegistrationMark size={20} color="var(--magenta)" />
                <span>{strength}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
