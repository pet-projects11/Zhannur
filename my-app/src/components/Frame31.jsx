import Group2 from "./zharnama/Group2";
import Group3 from "./Group3";
import Group6 from "./zharnama/Group6";
import Forms from "./formblock/Forms";
import Frame30 from "./Frame30";
import PropTypes from "prop-types";
import "./Frame31.css";

const Frame31 = ({ className = "" }) => {
  return (
    <div className={`frame184 ${className}`}>
      <Group2 />
      <Group3 />
      <Forms />
      <Group6 />
      <Frame30 />
    </div>
  );
};

Frame31.propTypes = {
  className: PropTypes.string,
};

export default Frame31;
