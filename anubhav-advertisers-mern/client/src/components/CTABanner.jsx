import CropMarks from "./CropMarks";
import AnimatedText from "./AnimatedText";

export default function CTABanner() {
  return (
    <section className="cta-banner crop-frame">
      <CropMarks />
      <div className="container">
        <h2 className="cta-banner__title">
          <AnimatedText as="span" className="cta-banner__line" text="READY TO" splitBy="word" />
          <AnimatedText as="span" className="cta-banner__line" text="GET SEEN?" splitBy="word" startDelay={0.15} />
        </h2>
        <p>Tell us where you want to be seen and we'll scout sites, handle permissions, and get your creative live within days.</p>
        <a className="btn btn--paper" href="#contact">
          CONTACT US →
        </a>
      </div>
    </section>
  );
}
