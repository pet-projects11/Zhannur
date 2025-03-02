import PropTypes from "prop-types";
import "./Frame37.css";
import { Link } from "react-router-dom";

const Frame37 = ({ className = "" }) => {
  // Функция для обработки скролла
  const handleScroll = (pixels) => (e) => {
    e.preventDefault(); // Отменяем стандартное поведение ссылки
    window.scrollBy({
      top: pixels, // количество пикселей для скролла
      behavior: "smooth", // плавный скролл
    });
  };

  return (
    <div className={`frame200 ${className}`}>
    <div className={`frame187 ${className}`}>
      <h1 className="text90">Біз туралы</h1>
      <div className="frame188">
        {/* Кнопка "Бізді неге тандау керек?" */}
        <div className="frame189">
          <div className="ellipse5" />
          <Link to="#" className="text91" onClick={handleScroll(-1700)}>
            Неге біз?
          </Link>
        </div>

        {/* Кнопка "Пікірлер" */}
        <div className="frame189">
          <div className="ellipse5" />
          <Link to="#" className="text92" onClick={handleScroll(-300)}>
            Пікірлер
          </Link>
        </div>
      </div>
    </div>
    <div className={`frame191 ${className}`}>
      <h1 className="text93">Қызметтер</h1>
      <div className="frame192">
        {/* Кнопка "Іздеу" */}
        <div className="frame193">
          <div className="ellipse7" />
          <Link to="#" className="text94" onClick={handleScroll(-4400)}>
            Іздеу
          </Link>
        </div>

        {/* Кнопка "Тандаулы ұсыныстар" */}
        <div className="frame193">
          <div className="ellipse7" />
          <Link to="#" className="text95" onClick={handleScroll(-900)}>
            Тандаулы ұсыныстар
          </Link>
        </div>

        {/* Кнопка "Мүлік сұрау формасы" */}
        <div className="frame193">
          <div className="ellipse7" />
          <Link to="#" className="text95" onClick={handleScroll(-1700)}>
            Мүлік сұрау формасы
          </Link>
        </div>
      </div>
    </div>
    <div className={`frame196 ${className}`}>
      <h1 className="text97">Байланыс</h1>
      <div className="frame197">
        <div className="frame198">
          <div className="ellipse10" />
          <div className="text98">
            <p className="email">{`Тел.: `}</p>
            <p className="email">+7 747 342 23 10</p>
          </div>
        </div>
        <div className="frame199">
          <div className="ellipse10" />
          <h3 className="text99">
            <p className="email">Email:</p>
            <p className="email">76nur@gmail.com</p>
          </h3>
        </div>
      </div>
    </div>
    </div>
  );
};

Frame37.propTypes = {
  className: PropTypes.string,
};

export default Frame37;
