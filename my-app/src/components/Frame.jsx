import PropTypes from "prop-types";
import "./Frame.css";

const Frame = ({ className = "", text, children }) => {
  return (
    <div className={`frame8 ${className}`}>
      <div className="text10">{text}</div>
      {children }
    </div>
  );
};

Frame.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node,
};

export default Frame;
