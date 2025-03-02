import Frame from "./Frame";
import PropTypes from "prop-types";
import "./Frame10.css";
import { useState } from "react";
import { useFilters } from "./FilterContext";

const Frame10 = ({ className = "" }) => {
  const { updateFilters } = useFilters();
  const [localFilters, setLocalFilters] = useState({
    home_type: "",
    city: "",
    bedrooms: "",
    maxPrice: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalFilters({
      ...localFilters,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the global filter context
    updateFilters(localFilters);
  };

  return (
    <div className={`group ${className}`}>
      <div className={`frame21 ${className}`}>
        <div className={`frame10 ${className}`}>
          <div className={`frame7 ${className}`}>
            <h1 className="text8">Сіз армандаған үйіңізді</h1>
            <h1 className="text9">Бір клик арқылы табыңыз</h1>
          </div>
          <form className="frame18" onSubmit={handleSubmit}>
            <Frame
              text="Үй түрі"
              children={
                <select 
                  className="frame9"
                  name="home_type"
                  value={localFilters.home_type}
                  onChange={handleInputChange}
                >
                  <option value="">Маңызды емес</option>
                  <option value="Коттедж">Коттедж</option>
                  <option value="Пәтер">Пәтер</option>
                  <option value="Үй">Үй</option>
                  <option value="Басқа">Басқа</option>
                </select>
              }
            />
            <Frame
              text="Орналасқан жері"
              children={
                <select
                  className="frame9"
                  name="city"
                  value={localFilters.city}
                  onChange={handleInputChange}
                >
                  <option value="">Қала</option>
                  <option value="Астана">Астана</option>
                  <option value="Алматы">Алматы</option>
                  <option value="Шымкент">Шымкент</option>
                </select>
              }
            />
            <Frame
              text="Бөлме саны"
              children={
                <select 
                  className="frame9"
                  name="bedrooms"
                  value={localFilters.bedrooms}
                  onChange={handleInputChange}
                >
                  <option value="">Маңызды емес</option>
                  <option value="4">4 бөлме</option>
                  <option value="5">5 бөлме</option>
                  <option value="6">6 бөлме</option>
                  <option value="7">7+ бөлме</option>
                </select>
              }
            />
            <Frame
              text="Бюджет"
              children={
                <input
                  type="number"
                  className="frame9" 
                  placeholder="Макс. бағасы" 
                  name="maxPrice"
                  value={localFilters.maxPrice}
                  onChange={handleInputChange}
                />
              }
            />
            <div className="frame19">
              <button type="submit" className="frame20">
                <b className="text15">Іздеу</b>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Frame10.propTypes = {
  className: PropTypes.string
};

export default Frame10;