/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const useFilter = () => {
  return useContext(FilterContext);
};

export function FilterProvider({ children }) {
  const [filterCountries, setFilterCountries] = useState([]);

  return (
    <FilterContext.Provider value={{ filterCountries, setFilterCountries }}>
      {children}
    </FilterContext.Provider>
  );
}
