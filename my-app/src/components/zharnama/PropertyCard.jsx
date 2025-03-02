import PropTypes from "prop-types";
import { useState } from "react";
import "./PropertyCard.css";

const PropertyCard = ({ property = null }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!property) {
    return (
      <div className="cart">
        <div className="placeholder">Загрузка данных...</div>
      </div>
    );
  }

  const {
    id,
    listing_type,
    house_type,
    bedrooms,
    toilets,
    house_square,
    address,
    city,
    price,
    image_path,
    description,
    user_full_name
  } = property;

  const formatImagePath = (rawPath) => {
    if (!rawPath) return "/default-property.jpg";
    const filename = rawPath.split(/[\\/]/).pop();
    return `${filename}`;
  };

  const formattedAddress = `${address}, ${city}`;
  const imageSrc = formatImagePath(image_path);
  const listingDisplay = listing_type === "Жалға алу" ? "Жалға алу" : "Сатылым";

  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleOutsideClick = (e) => {
    if (e.target.className === "modal-overlay") {
      closeModal();
    }
  };

  return (
    <>
      <div className="cart" onClick={openModal}>
        <div className="group1">
          <div className="frame25">
            <div className="frame26" style={{ backgroundImage: `url("${imageSrc}")` }}>
              <div className="overlay"></div>
              <div className="deeply-nested-pair">
                <div className="frame27">
                  <div className="text16">{listingDisplay}</div>
                </div>
              </div>
              <div className="frame28">
                <div className="frame29">
                  <div className="another-empty-pair">
                    <img className="empty-pair-icon" loading="lazy" alt="Спальни" src="/bed.svg" />
                    <div className="text17">{bedrooms}</div>
                  </div>
                  <div className="another-empty-pair">
                    <img className="one-more-empty-pair" loading="lazy" alt="Санузлы" src="/shower.svg" />
                    <div className="text17">{toilets}</div>
                  </div>
                  <div className="another-empty-pair">
                    <img className="empty-pair-four" alt="Площадь" src="/rulet.svg" />
                    <div className="text17">{house_square} м²</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame31">
          <div className="text20">{house_type}</div>
          <div className="price">{price.toLocaleString()} ₽</div>
          <div className="frame32">
            <img className="vector-icon1" alt="Местоположение" src="/point.svg" />
            <div className="text17">{formattedAddress}</div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay"  onClick={handleOutsideClick}>
          <div className="modal-content">
            <button className="modal-close-btn" onClick={closeModal}>✕</button>
            <div className="modal-image">
              <img src={imageSrc} alt={`${house_type} в ${city}`} />
              <div className="modal-badge">{listingDisplay}</div>
            </div>
            <div className="modal-details">
              <h2>{house_type}</h2>
              <div className="modal-price">{price.toLocaleString()} ₽</div>
              <div className="modal-address">
                <img className="modal-icon" alt="Местоположение" src="/point.svg" />
                <span className="modal-text">{formattedAddress}</span>
              </div>
              <div className="modal-features">
                <div className="modal-feature">
                  <img className="empty-pair-icon" loading="lazy" alt="Спальни" src="/black_bad.svg" />
                  <span className="modal-text">{bedrooms} Жатын бөлмелер</span>
                </div>
                <div className="modal-feature">
                  <img className="empty-pair-four" alt="Санузлы" src="/blackshower.svg" />
                  <span className="modal-text">{toilets} Жуынатын бөлмелер</span>
                </div>
                <div className="modal-feature">
                  <img className="modal-icon" alt="Площадь" src="/black_rulet.svg" />
                  <span className="modal-text">{house_square} м²</span>
                </div>
              </div>

              {description && (
                <div className="modal-description">
                  <h3 className="description-titles">Сипаттама</h3>
                  <p className="modal-text"> {description}</p>
                </div>
              )}
              <div className="modal-actions">
                <span className="modal-text">{user_full_name}:</span>
                <button className="modal-contact-btn">Байланыс</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

PropertyCard.propTypes = {
  property: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    listing_type: PropTypes.string.isRequired,
    house_type: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    toilets: PropTypes.number.isRequired,
    house_square: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image_path: PropTypes.string,
    description: PropTypes.string,
    user_full_name: PropTypes.string
  })
};

export default PropertyCard;