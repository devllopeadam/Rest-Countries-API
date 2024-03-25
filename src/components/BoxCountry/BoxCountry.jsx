/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./boxcountry.scss";
import { motion } from "framer-motion";
const BoxCountry = ({ srcImg, country, population, region, capital }) => {
  return (
    <motion.div
      animate={{
        x: 30,
        y: 0,
        scale: 1,
        rotate: 0,
      }}>
      <Link
        className="box-country"
        to={country.toLowerCase()}>
        <div className="content">
          <div className="image">
            <img src={srcImg} />
          </div>
          <div className="text">
            <h2 className="name-country">{country}</h2>
            <p className="population">
              Population: <span>{population}</span>
            </p>
            <p className="region">
              Region: <span>{region}</span>
            </p>
            <p className="population">
              Capital: <span>{capital}</span>
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BoxCountry;
