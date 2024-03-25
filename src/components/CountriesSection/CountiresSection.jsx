/* eslint-disable react-refresh/only-export-components */
import "./countriessection.scss";
import { useEffect, useState } from "react";
import { useCountries } from "../../context/CountriesContext";

import BoxCountry from "../BoxCountry/BoxCountry";
import { useFilter } from "../../context/FilterContext";

const CountiresSection = () => {
  const [searching, setSearching] = useState(true);
  const { setCountries } = useCountries();
  const { filterCountries } = useFilter();

  useEffect(() => {
    try {
      fetch("https://restcountries.com/v3.1/all")
        .then((data) => data.json())
        .then((final) => setCountries(final));
    } catch {
      console.log("Error");
    }
  }, []);

  useEffect(() => {
    setInterval(() => {
      setSearching(false);
    }, 1850);
  }, []);

  const showData = () => {
    return searching ? (
      <h1>Searching...</h1>
    ) : (
      filterCountries.map((country) => {
        return (
          <BoxCountry
            key={country.name.common}
            srcImg={country.flags.png}
            country={country.name.common}
            population={country.population.toLocaleString()}
            region={country.region.toLowerCase()}
            capital={
              country.capital ? country.capital.join(", ") : "No Capital"
            }
          />
        );
      })
    );
  };
  return (
    <div className="countries-section">
      <div className="container">{showData()}</div>
    </div>
  );
};

export const countriesLoader = async () => {
  const data = await fetch("https://restcountries.com/v3.1/all");
  return await data.json();
};

export default CountiresSection;
