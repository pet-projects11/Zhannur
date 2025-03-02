import Frame24 from "./Frame24";
import Frame25 from "./Frame25";
import PropTypes from "prop-types";
import "./Group5.css";

const Forms = ({ className = "" }) => {
  return (
    <div className={`group13 ${className}`}>
      <img className="rectangle-icon3" alt="" src="/323-rectangle@2x.png" />
      <Frame24 />
      <img className="rectangle-icon4" alt="" src="/345-rectangle.svg" />
      <Frame25 />
    </div>
  );
};

Forms.propTypes = {
  className: PropTypes.string,
};

export default Forms;
