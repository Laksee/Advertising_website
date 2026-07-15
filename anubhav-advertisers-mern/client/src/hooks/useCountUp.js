import { useEffect, useRef, useState } from "react";

// Animates a stat string like "480+", "3.4x", or "94%" by counting up the
// numeric portion and re-attaching whatever prefix/suffix surrounded it.
// Starts only once the element is scrolled into view.
export default function useCountUp(rawValue, { duration = 1400 } = {}) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(formatZero(rawValue));
  const hasRun = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setDisplay(rawValue);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          animate();
          observer.unobserve(node);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);

    function animate() {
      const match = String(rawValue).match(/^([^\d.]*)([\d.]+)(.*)$/);
      if (!match) {
        setDisplay(rawValue);
        return;
      }
      const [, prefix, numberStr, suffix] = match;
      const target = parseFloat(numberStr);
      const decimals = numberStr.includes(".") ? numberStr.split(".")[1].length : 0;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        // ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = (target * eased).toFixed(decimals);
        setDisplay(`${prefix}${current}${suffix}`);
        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      }
      requestAnimationFrame(tick);
    }

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rawValue]);

  return [ref, display];
}

function formatZero(rawValue) {
  const match = String(rawValue).match(/^([^\d.]*)([\d.]+)(.*)$/);
  if (!match) return rawValue;
  const [, prefix, numberStr, suffix] = match;
  const decimals = numberStr.includes(".") ? numberStr.split(".")[1].length : 0;
  return `${prefix}${(0).toFixed(decimals)}${suffix}`;
}
