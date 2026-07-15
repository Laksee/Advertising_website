const WORDS = ["UNSKIPPABLE", "UNBLOCKABLE", "UNMISSABLE"];

function MarqueeSet() {
  return (
    <div className="marquee__set">
      {WORDS.map((word) => (
        <span key={word}>
          <span className="word">{word}</span>
          <span className="sep">✕</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {/* Two identical sets back-to-back; the track animates exactly -50%
            so the loop seam is invisible. */}
        <MarqueeSet />
        <MarqueeSet />
      </div>
    </div>
  );
}
