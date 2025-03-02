import Group1 from "../Group1";
import PropTypes from "prop-types";
import "./Group2.css";
import React, { useState, useEffect } from "react";
import PropertyDisplay from "./PropertyDisplay";

const Group2 = ({ className = "" }) => {
  const [visibleRows, setVisibleRows] = useState(2);
  const [expandedHeight, setExpandedHeight] = useState(0);
  const [buttonText, setButtonText] = useState("Көбірек Көрсету");
  const [isExpanded, setIsExpanded] = useState(false); // Новый state

  useEffect(() => {
    const rowHeight = 320;
    const additionalHeight = (visibleRows - 2) * rowHeight;
    setExpandedHeight(additionalHeight);

    document.querySelectorAll(".group11, .group13, .group17, .group18").forEach(
      (element) => {
        element.style.transition = "transform 0.5s ease";
        element.style.transform = `translateY(${additionalHeight}px)`;
      }
    );
  }, [visibleRows]);

  const handleShowMore = () => {
    if (!isExpanded) {
      setButtonText("Жабу");
      setVisibleRows((prevRows) => prevRows + 2);

      document.querySelectorAll(".frame205").forEach((element) => {
        element.style.marginTop = "30%";
      });

      setIsExpanded(true);
    } else {
      setButtonText("Көбірек Көрсету");
      setVisibleRows(2);

      document.querySelectorAll(".frame205").forEach((element) => {
        element.style.marginTop = "";
      });

      document.querySelectorAll(".group11, .group13, .group17, .group18").forEach(
        (element) => {
          element.style.transition = "transform 0.5s ease";
          element.style.transform = "translateY(0)";
        }
      );

      setIsExpanded(false);
    }
  };

  return (
    <div className={`group10 ${className}`}>
      <div className="frame127">
        <div className="frame128">
          <div className={`frame23 ${className}`}>
            <div className={`frame22 ${className}`}>
              <h1 className="title">Біздің мүліктерді қараңыз</h1>
              <h3 className="description">
                Нарықтағы 100-ден астам түрлі үйлерді таңдаңыз!
              </h3>
            </div>
          </div>

          {/* Блок с недвижимостью */}
          <div className="property-display-container">
            <PropertyDisplay
              className="frame70"
              containerClassName="frame71"
              itemsPerRow={4}
              visibleRows={visibleRows}
            />
          </div>

          {/* Кнопка "Көбірек Көрсету" */}
          <div className="show-more-button-container">
            <div className="group9" onClick={handleShowMore}>
              <div className="frame126">
                <b className="page-title">{buttonText}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Group2.propTypes = {
  className: PropTypes.string,
};

export default Group2;