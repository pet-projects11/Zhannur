import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PropertyCard from "./PropertyCard";
import { fetchProperties } from "../../services/api";
import { useFilters } from "../FilterContext";
import "./PropertyDisplay.css";

const PropertyDisplay = ({ className = "", containerClassName = "", itemsPerRow = 4, visibleRows = 1 }) => {
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

  // Filter properties based on received filters
  const filteredProperties = properties.filter(property => {
    // Check home type filter
    if (filters.home_type && property.house_type !== filters.home_type) {
      return false;
    }
    
    // Check city filter
    if (filters.city && property.city !== filters.city) {
      return false;
    }
    
    // Check bedrooms filter
    if (filters.bedrooms && property.bedrooms < parseInt(filters.bedrooms)) {
      return false;
    }
    
    // Check price filter
    if (filters.maxPrice && property.price > parseInt(filters.maxPrice)) {
      return false;
    }
    
    return true;
  });

  const visibleProperties = filteredProperties.slice(0, visibleRows * itemsPerRow);

  // Split properties into rows
  const rows = [];
  for (let i = 0; i < visibleProperties.length; i += itemsPerRow) {
    rows.push(visibleProperties.slice(i, i + itemsPerRow));
  }

  if (loading) {
    return <div className="loading">Загрузка...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (filteredProperties.length === 0) {
    return <div className="no-properties">Нет объектов недвижимости, соответствующих вашим критериям</div>;
  }

  return (
    <div className={`property-display ${className}`}>
      {rows.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className={`property-row ${containerClassName}`}>
          {row.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ))}
    </div>
  );
};

PropertyDisplay.propTypes = {
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  itemsPerRow: PropTypes.number,
  visibleRows: PropTypes.number
};

export default PropertyDisplay;