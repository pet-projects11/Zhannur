// FilterContext.jsx
import { createContext, useState, useContext } from 'react';

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    home_type: "",
    city: "",
    bedrooms: "",
    maxPrice: ""
  });

  const updateFilters = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <FilterContext.Provider value={{ filters, updateFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => useContext(FilterContext);