/* eslint-disable react/prop-types */
import "./detail.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Detail = ({ country }) => {
  const [allCountries, setAllCountries] = useState();
  const [nameBorders, setNameBorders] = useState();
  const [noBorders, setNoBorders] = useState(false);

  const currencies = Object.values(country[0].currencies)[0].name;
  const nativeName = Object.values(Object.values(country[0].name)[2])[0].common;
  const capital = country[0].capital
    ? country[0].capital.join(", ")
    : "No Capital";
  const population = country[0].population.toLocaleString();
  const languages = Object.values(country[0].languages)[0];
  const borders = country[0].borders;
  const nameBordersBeta = [];

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((data) => data.json())
      .then((final) => {
        setAllCountries(final);
      });
  }, []);

  useEffect(() => {
    if (allCountries) {
      allCountries.filter((country) => {
        if (borders) {
          for (let i = 0; i < borders.length; i++) {
            if (country.cca3 === borders[i]) {
              nameBordersBeta.push(country.name.common);
            }
          }
        } else {
          setNoBorders(true);
        }
      });
    }
    setNameBorders(nameBordersBeta);
  }, [allCountries]);

  return (
    <motion.div
      animate={{
        x: 30,
        y: 0,
        scale: 1,
        rotate: 0,
      }}>
      <div className="detail  ">
        <div className="image">
          <img src={country[0].flags.svg} />
        </div>
        <div className="details-text">
          <h2 className="name-country">{country[0].name.common}</h2>
          <div className="other-details">
            <ul>
              <li>
                Native Name: <span>{nativeName}</span>
              </li>
              <li>
                Population: <span>{population}</span>
              </li>
              <li>
                Region: <span>{country[0].region}</span>
              </li>
              <li>
                Sub Region: <span>{country[0].subregion}</span>
              </li>
              <li>
                Capital:
                <span>{capital}</span>
              </li>
            </ul>
            <ul>
              <li>
                Top Level Domain: <span>{country[0].tld[0]}</span>
              </li>
              <li>
                Currencies: <span>{currencies}</span>
              </li>
              <li>
                Languages: <span>{languages}</span>
              </li>
            </ul>
          </div>
          <div className="borders-country">
            <p>Border Countries:</p>
            {nameBorders && noBorders === false ? (
              <ul>
                {nameBorders.map((name) => {
                  return <li key={name}>{name}</li>;
                })}
              </ul>
            ) : (
              <p className="no-borders">No borders...</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Detail;
