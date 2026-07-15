import { useMemo } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

// Splits `text` into words or letters and staggers their entrance the moment
// the element scrolls into view. Used for the hero headline and every
// section title, so type is never just "sitting there" — it arrives.
export default function AnimatedText({
  text,
  as: Tag = "span",
  splitBy = "word",
  className = "",
  stagger = 0.035,
  startDelay = 0,
}) {
  const [ref, isVisible] = useScrollReveal();

  const units = useMemo(() => {
    return splitBy === "char" ? Array.from(text) : text.split(" ");
  }, [text, splitBy]);

  return (
    <Tag ref={ref} className={`kinetic-text ${className} ${isVisible ? "is-visible" : ""}`}>
      {units.map((unit, i) => (
        <span
          key={`${unit}-${i}`}
          className="kinetic-text__unit"
          style={{ transitionDelay: `${startDelay + i * stagger}s` }}
        >
          {unit === " " ? "\u00A0" : unit}
          {splitBy === "word" && i < units.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </Tag>
  );
}
