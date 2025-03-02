import Frame1 from "./Frame1";
import PropTypes from "prop-types";
import "./Frame30.css";

const Frame30 = ({ className = "" }) => {
  return (
    <div className={`group18 ${className}`}>
    <div className={`frame179 ${className}`}>
      <div className="frame180">
        <h1 className="text86">Пікірлер</h1>
        <h3 className="text87">Клиенттеріміз біз туралы не дейді?</h3>
      </div>
      <div className="frame181">
        <div className="frame182">
          <img
            className="vector-icon9"
            loading="lazy"
            alt=""
            src="/512-vector.svg"
          />
        </div>
        <Frame1
          rectangle="/515-rectangle@2x.png"
          text="Илон Маск"
          text1="14 қаңтар 2025"
          text2="“Өте кәсіби брокер және керемет үйлер таңдауы”"
        />
        <Frame1
          frameHeight="unset"
          frameWidth="unset"
          rectangle="/523-rectangle@2x.png"
          frameWidth1="134.6px"
          text="Джефф Безос"
          text1="7 желтоқсан 2024"
          textWidth="unset"
          textDisplay="unset"
          text2="“Өте жақсы, олар мүліктердің ең жақсы бағасын және клиенттерге қызмет көрсетуді ұсынады”"
        />
        <Frame1
          frameHeight="368px"
          frameWidth="220px"
          rectangle="/531-rectangle@2x.png"
          frameWidth1="184px"
          text="Бағдат Мусин"
          text1="22 қыркүйек 2024"
          textWidth="150px"
          textDisplay="inline-block"
          text2="“Жақсы тәжірибе және клиенттерді жылы қарсы алу брокердің деңгейін көрсетеді”"
        />
        <div className="frame183">
          <img
            className="vector-icon10"
            loading="lazy"
            alt=""
            src="/538-vector.svg"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

Frame30.propTypes = {
  className: PropTypes.string,
};

export default Frame30;
