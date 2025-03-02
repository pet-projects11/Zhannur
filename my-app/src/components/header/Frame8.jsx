import PropTypes from "prop-types";
import "./Frame8.css";
import { Link } from "react-router-dom";

const Frame8 = ({ className = "" }) => {
  const handleClick = (e) => {
    e.preventDefault(); // Отменяем стандартное поведение ссылки

    // Настройте расстояние скролла здесь:
    window.scrollBy({
      top: 2600, // Скролл на 500 пикселей вниз
      behavior: "smooth", // Плавный скролл
    });
  };
  const handleClicks = (e) => {
    e.preventDefault(); // Отменяем стандартное поведение ссылки

    // Скролл до конца страницы
    window.scrollTo({
      top: document.body.scrollHeight, // До конца страницы
      behavior: "smooth", // Плавный скролл
    });
  };

  return (
    <header className={`frame6 ${className}`}>
        <div className={`frame ${className}`}>
          <img className="group-icon" loading="lazy" alt="" src="/logo.svg" />
          <a className="text">UyTap</a>
        </div>
        <div className={`frame5 ${className}`}>
        <div className={`text-wrapper ${className}`}>
          <Link to="/" className="text3">
            Бастапқы бет
          </Link>
        </div>
          {/* <Frame3 /> */}
          <div className={`text-wrapper ${className}`}>
          <Link to="#" className="text3" onClick={handleClick}>
            Біз туралы
          </Link>
        </div>
        <div className={`text-wrapper ${className}`}>
          <Link to="#" className="text3" onClick={handleClicks}>
            Байланыс
          </Link>
        </div>
      </div>
    </header>
  );
};

Frame8.propTypes = {
  className: PropTypes.string,
};

export default Frame8;
