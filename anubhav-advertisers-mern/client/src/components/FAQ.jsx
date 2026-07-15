import { useState } from "react";
import AnimatedText from "./AnimatedText";

export default function FAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  function toggle(i) {
    setOpenIndex((current) => (current === i ? -1 : i));
  }

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">CAN'T SPOT YOUR QUERY?</p>
          <AnimatedText as="h2" className="section-title" text="Clear Answers" />
        </div>

        <div className="faq__list">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question} className={`faq-item ${isOpen ? "is-open" : ""}`}>
                <button
                  className="faq-item__q"
                  aria-expanded={isOpen}
                  onClick={() => toggle(i)}
                >
                  <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                  {faq.question}
                  <span className="icon">+</span>
                </button>
                <div className="faq-item__a">
                  <div className="faq-item__a-inner">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
