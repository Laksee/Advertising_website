import { useState, useRef } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import RegistrationMark from "./RegistrationMark";
import AnimatedText from "./AnimatedText";
import useParallax from "../hooks/useParallax";
import MobileWorkGallery from "./MobileWorkGallery";
import useIsMobile from "../hooks/useIsMobile";

function WorkCard({ item, index, onOpen }) {
  const [ref, isVisible] = useScrollReveal();
  const cardRef = useRef(null);
  const rotations = [-12, 8, -6, 10, -4, 7];
  const workRef = useRef(null);
  useParallax(workRef, 70);

  const widths = [
    "340px",
    "340px",
    "340px",
    "340px",
    "340px",
    "340px",
  ];

  const heights = [
    "230px",
    "230px",
    "230px",
    "230px",
    "230px",
    "230px",
  ];

  const style = {
    width: widths[index % widths.length],
    height: heights[index % heights.length],

    "--rotation": `${rotations[index % rotations.length]}deg`,

    "--i": index,
  };


  const image =
    item.photos?.[0] ??
    `https://picsum.photos/seed/${item.seed}/1200/900`;

  return (
    <div className={`campaign-card-float card-${index + 1}`}>
      <div
        ref={(node) => {
          ref.current = node;
          cardRef.current = node;
        }}
        style={style}
        className={`campaign-card ${isVisible ? "show" : ""}`}
        onClick={() => onOpen(item)}
      >
        <img
          src={image}
          alt={item.project}
          className="campaign-card__image"
        />

        <div className="campaign-card__gradient" />

        <div className="campaign-card__arrow">
          ↗
        </div>

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
  const [titleRef, titleVisible] = useScrollReveal();
  const isMobile = useIsMobile();

  return (
    <section className="section" id="work">
      <div className="container">

        <div className="section-head">
        </div>

        <div className="work-gallery-wrap">

          {isMobile ? (

            <MobileWorkGallery
              items={items}
              onOpen={setSelectedProject}
            />

          ) : (

            <>
              <div className="gallery-title">

                <div
                  ref={titleRef}
                  className={`gallery-title ${titleVisible ? "show" : ""}`}
                >
                  OUR WORK
                </div>

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
            </>

          )}

        </div>

      </div>
    </section>
  );
}
