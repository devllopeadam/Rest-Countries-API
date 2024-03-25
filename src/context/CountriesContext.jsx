/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const CountriesContext = createContext(null);

export function useCountries() {
  return useContext(CountriesContext);
}

export function CountriesProvider({ children }) {
  const [countries, setCountries] = useState();

  const values = { countries, setCountries };

  return (
    <CountriesContext.Provider value={values}>
      {children}
    </CountriesContext.Provider>
  );
}
