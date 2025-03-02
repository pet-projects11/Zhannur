import PropTypes from "prop-types";
import "./Frame24.css";

const Frame24 = ({ className = "" }) => {
  return (
    <div className={`group12 ${className}`}>
      <div className={`frame130 ${className}`}>
        <div className="feature-title">
          <h1 className="heading">Бізді неге таңдау керек?</h1>
          <div className="frame131">
            <div className="feature-description">
              <b className="text60">01.</b>
              <h1 className="data-value">Тексерілген мүліктер</h1>
            </div>
            <h3 className="data-label">
              Әрбір үй шынайылығы мен сапасы үшін мұқият арнайы маманмен
              тексеріледі
            </h3>
          </div>
        </div>
        <div className="divider" />
        <div className="feature-list">
          <div className="feature-item">
            <div className="feature-description">
              <b className="data-point">02.</b>
              <h1 className="data-value">Кең таңдау</h1>
            </div>
            <h3 className="data-label">
              Әртүрлі өмір салтына лайық үйлер таңдай аласыз
            </h3>
          </div>
          <div className="feature-item">
            <div className="feature-description">
              <b className="text60">03.</b>
              <h1 className="data-value">Сенімді қызмет</h1>
            </div>
            <h3 className="data-label">
              Біздің қызметкерлер тобы сізге мінсіз үйді оңай және сенімді табуға
              көмектесуге дайын.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

Frame24.propTypes = {
  className: PropTypes.string,
};

export default Frame24;
