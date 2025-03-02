import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FeatureItem.css";

const FeatureItem = ({
  className = "",
  dataPoint,
  featureDataAlignItems,
  featureDataHeight,
  dataValue,
  iconList,
}) => {
  const featureDataStyle = useMemo(() => {
    return {
      alignItems: featureDataAlignItems,
      height: featureDataHeight,
    };
  }, [featureDataAlignItems, featureDataHeight]);

  return (
    <div className={`feature-item2 ${className}`}>
      <div className="data-point1">{dataPoint}</div>
      <div className="feature-data1" style={featureDataStyle}>
        <div className="data-value1">{dataValue}</div>
        <img className="icon-list" alt="" src={iconList} />
      </div>
    </div>
  );
};

FeatureItem.propTypes = {
  className: PropTypes.string,
  dataPoint: PropTypes.string,
  dataValue: PropTypes.string,
  iconList: PropTypes.string,

  /** Style props */
  featureDataAlignItems: PropTypes.string,
  featureDataHeight: PropTypes.string,
};

export default FeatureItem;
