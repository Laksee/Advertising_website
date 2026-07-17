export default function MobileWorkGallery({ items, onOpen }) {

  const mobileItems = items.slice(0, 4);

  return (

    <div className="mobile-work-gallery">

      <h2 className="mobile-gallery-title">
        OUR WORK
      </h2>

      <div className="mobile-gallery-grid">

        {mobileItems.map((item, index) => (

          <div
            key={item.project}
            className={`mobile-card mobile-card-${index + 1}`}
            onClick={() => onOpen(item)}
          >

            <img
              src={item.photos[0]}
              alt={item.project}
            />

          </div>

        ))}

      </div>

    </div>

  );

}