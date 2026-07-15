import useCountUp from "../hooks/useCountUp";

function StatItem({ label, value }) {
  const [ref, display] = useCountUp(value);
  return (
    <div ref={ref} className="stat">
      <span className="stat__value">{display}</span>
      <span className="stat__label">{label}</span>
    </div>
  );
}

export default function Stats({ stats }) {
  return (
    <section className="section section--tight">
      <div className="container">
        <div className="stats__grid">
          {stats.map((stat) => (
            <StatItem key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </div>
      </div>
    </section>
  );
}
