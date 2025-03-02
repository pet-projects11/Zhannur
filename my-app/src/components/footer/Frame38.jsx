import Frame37 from "./Frame37";
import PropTypes from "prop-types";
import "./Frame38.css";

const Frame38 = ({ className = "" }) => {
  return (
    <section className={`frame205 ${className}`}>
      <div className={`frame203 ${className}`}>
        <div className={`frame202 ${className}`}>
          <div className={`frame201 ${className}`}>
            <div className={`frame186 ${className}`}>
              <div className={`frame185 ${className}`}>
                <img className="group-icon1" loading="lazy" alt="" src="/logo.svg" />
                <b className="text88">UyTap</b>
              </div>
              <h3 className="text89">
                Жүздеген тексерілген ұсыныстардың ішінен мінсіз үйіңізді табыңыз. Жалға
                беру, сатып алу, кәсіби көмек – бәрі бір жерде!
              </h3>
            </div>
            <Frame37 />
          </div>
        </div>
      </div>
      <div className={`frame204 ${className}`}>
          <h2 className="text100">© UyTap - Барлық құқықтар сақталған</h2>
      </div>
    </section>
  );
};

Frame38.propTypes = {
  className: PropTypes.string,
};

export default Frame38;
