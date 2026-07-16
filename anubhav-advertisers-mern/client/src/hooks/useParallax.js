import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useParallax(ref, y = 80) {
  useLayoutEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      {
        y: 0,
      },
      {
        y,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, [ref, y]);
}