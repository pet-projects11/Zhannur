import PropTypes from "prop-types";
import "./Group1.css";

const Group1 = ({ className = "", onClick, buttonText }) => {
  return (
    <div className={`group9 ${className}`} onClick={onClick}>
      <div className="frame126">
        <b className="page-title">{buttonText}</b>
      </div>
    </div>
  );
};

Group1.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  buttonText: PropTypes.string
};

export default Group1;
