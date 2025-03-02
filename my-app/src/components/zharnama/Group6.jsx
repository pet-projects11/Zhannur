import PropertyCard from "./PropertyCard";
import PropTypes from "prop-types";
import "./Group6.css";
import React, { useState, useEffect } from 'react';
import { fetchProperties } from "../../services/api";
import { useFilters } from "../FilterContext";

const Group6 = ({ className = "", itemsPerRow = 4 , visibleRows = 1 }) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { filters } = useFilters();

  useEffect(() => {
    const loadProperties = async () => {
      try {
        setLoading(true);
        const data = await fetchProperties();
        setProperties(data);
        setError(null);
      } catch (err) {
        setError('Не удалось загрузить данные о недвижимости');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProperties();
  }, []);

  // Фильтрация данных
  const filteredProperties = properties.filter(property => {
    if (filters.home_type && property.house_type !== filters.home_type) {
      return false;
    }
    if (filters.city && property.city !== filters.city) {
      return false;
    }
    if (filters.bedrooms && property.bedrooms < parseInt(filters.bedrooms, 10)) {
      return false;
    }
    if (filters.maxPrice && property.price > parseInt(filters.maxPrice, 10)) {
      return false;
    }
    return true;
  });

  // Обрезаем список недвижимости
  const visibleProperties = filteredProperties.slice(0, visibleRows * itemsPerRow);

  return (
    <div className={`group17 ${className}`}>
      <div className="frame173">
        <div className={`frame136 ${className}`}>
          <h1 className="heading2">Таңдаулы ұсыныстар</h1>
        </div>
        <div className="content-grid">
          {loading ? (
            <div className="loading">Загрузка...</div>
          ) : error ? (
            <div className="error">{error}</div>
          ) : visibleProperties.length === 0 ? (
            <div className="no-properties">Нет объектов недвижимости, соответствующих вашим критериям</div>
          ) : (
            visibleProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

Group6.propTypes = {
  className: PropTypes.string,
  itemsPerRow: PropTypes.number,
  visibleRows: PropTypes.number
};

export default Group6;
