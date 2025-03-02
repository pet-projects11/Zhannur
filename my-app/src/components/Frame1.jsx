import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Frame1.css";

const Frame1 = ({
  className = "",
  frameHeight,
  frameWidth,
  rectangle,
  frameWidth1,
  text,
  text1,
  textWidth,
  textDisplay,
  text2,
}) => {
  const frameStyle = useMemo(() => {
    return {
      height: frameHeight,
    };
  }, [frameHeight]);

  const frame1Style = useMemo(() => {
    return {
      width: frameWidth,
    };
  }, [frameWidth]);

  const frame2Style = useMemo(() => {
    return {
      width: frameWidth1,
    };
  }, [frameWidth1]);

  const textStyle = useMemo(() => {
    return {
      width: textWidth,
      display: textDisplay,
    };
  }, [textWidth, textDisplay]);

  return (
    <div className={`frame175 ${className}`} style={frameStyle}>
      <div className="frame176" style={frame1Style}>
        <img
          className="rectangle-icon5"
          loading="lazy"
          alt=""
          src={rectangle}
        />
        <div className="frame177" style={frame2Style}>
          <h2 className="text83">{text}</h2>
          <div className="text84" style={textStyle}>
            {text1}
          </div>
        </div>
      </div>
      <div className="frame178">
        <h2 className="text85">{text2}</h2>
      </div>
    </div>
  );
};

Frame1.propTypes = {
  className: PropTypes.string,
  rectangle: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,

  /** Style props */
  frameHeight: PropTypes.string,
  frameWidth: PropTypes.string,
  frameWidth1: PropTypes.string,
  textWidth: PropTypes.string,
  textDisplay: PropTypes.string,
};

export default Frame1;
