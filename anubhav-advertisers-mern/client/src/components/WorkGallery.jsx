import { useState, useRef } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import RegistrationMark from "./RegistrationMark";
import AnimatedText from "./AnimatedText";

function WorkCard({ item, index, onOpen }) {
  const [ref, isVisible] = useScrollReveal();
  const cardRef = useRef(null);
  const rotations = [-12, 8, -6, 10, -4, 7];

  const widths = [
    "320px",
    "430px",
    "360px",
    "470px",
    "340px",
    "410px",
  ];

  const heights = [
    "460px",
    "300px",
    "500px",
    "340px",
    "280px",
    "480px",
  ];

  const style = {
    width: widths[index % widths.length],
    height: heights[index % heights.length],

    transform: `rotate(${rotations[index % rotations.length]}deg)`,

    animationDelay: `${index * 0.3}s`,
    animationDuration: `${6 + index}s`,
  };

  function handleMouseMove(e) {
    const card = cardRef.current;

    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 12;
    const rotateX = ((y / rect.height) - 0.5) * -12;

    card.style.transform = `
    perspective(1200px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    translateY(-12px)
  `;
  }

  function handleMouseLeave() {
    const card = cardRef.current;

    if (!card) return;

    card.style.transform = "";
  }

  const image =
    item.photos?.[0] ??
    `https://picsum.photos/seed/${item.seed}/1200/900`;

  return (
    <div
      ref={(node) => {
        ref.current = node;
        cardRef.current = node;
      }}
      style={style}
      className={`campaign-card ${isVisible ? "show delay-${index}" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpen(item)}
    >
      <img
        src={image}
        alt={item.project}
        className="campaign-card__image"
      />

      <div className="campaign-card__gradient" />

      <div className="campaign-card__content">

        <span className="campaign-card__client">
          {item.client}
        </span>

        <h3>{item.project}</h3>

        <p>{item.location}</p>

      </div>

      <div className="campaign-card__arrow">
        ↗
      </div>

    </div>
  );
}

function GalleryModal({ project, onClose }) {
  const [current, setCurrent] = useState(0);

  if (!project) return null;

  const photos = project.photos;

  function next() {
    setCurrent((prev) => (prev + 1) % photos.length);
  }

  function prev() {
    setCurrent((prev) => (prev - 1 + photos.length) % photos.length);
  }

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div
      className="gallery-modal"
      onClick={onClose}
    >
      <div
        className="gallery-modal__content"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          className="gallery-modal__close"
          onClick={onClose}
        >
          ✕
        </button>

        <button
          className="gallery-arrow left"
          onClick={prev}
        >
          ‹
        </button>

        <img
          src={photos[current]}
          alt={project.project}
          className="gallery-modal__image"
        />

        <button
          className="gallery-arrow right"
          onClick={next}
        >
          ›
        </button>

        <div className="gallery-info">

          <h2>{project.project}</h2>

          <p>{project.client}</p>

          <span>{project.spec}</span>

        </div>

        <div className="gallery-thumbnails">

          {photos.map((photo, index) => (

            <img
              key={photo}
              src={photo}
              onClick={() => setCurrent(index)}
              className={
                current === index
                  ? "active"
                  : ""
              }
            />

          ))}

        </div>

      </div>
    </div>
  );
}

export default function WorkGallery({ items }) {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">OUR WORK, ON THE STREET</p>
          <AnimatedText as="h2" className="section-title" text="Sites Live Right Now" />
          <p className="lede">
            Real installs, photo-verified. Flip a card to see the client, the location, and the exact spec.
          </p>
        </div>

        <div className="floating-gallery">
          {items.map((item, index) => (
            <WorkCard
              key={item.project}
              item={item}
              index={index}
              onOpen={setSelectedProject}
            />
          ))}
        </div>
      </div>
      {selectedProject && (
        <GalleryModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
