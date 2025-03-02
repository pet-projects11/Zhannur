import PropTypes from "prop-types";
import "./Group3.css";

const Group3 = ({ className = "" }) => {
  return (
    <div className={`group11 ${className}`}>
      <img
        className="rectangle-icon1"
        loading="lazy"
        alt=""
        src="/313-rectangle@2x.png"
      />
      <img
        className="shapes-icon"
        loading="lazy"
        alt=""
        src="/314-rectangle@2x.png"
      />
      <img
        className="shapes-icon1"
        loading="lazy"
        alt=""
        src="/315-rectangle@2x.png"
      />
      <img
        className="shapes-icon2"
        loading="lazy"
        alt=""
        src="/315-rectangle@2x.png"
      />
      <img
        className="rectangle-icon2"
        loading="lazy"
        alt=""
        src="/317-rectangle@2x.png"
      />
      <div className="frame129">
        <h1 className="title3">Мінсіз үйіңізді табыңыз</h1>
        <h2 className="description1">
          Біздің сапалы үйлердің кең таңдауы. Қалалық немесе қала сыртындағы –
          сізге лайықты үйлер.
        </h2>
        <div className="rectangle" />
      </div>
    </div>
  );
};

Group3.propTypes = {
  className: PropTypes.string,
};

export default Group3;
