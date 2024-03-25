/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./filtersection.scss";
import { IoSearch, IoClose } from "react-icons/io5";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useCountries } from "../../context/CountriesContext";
import { useFilter } from "../../context/FilterContext";

const commandsFilter = [
  { label: "All", id: 1 },
  { label: "Africa", id: 2 },
  { label: "America", id: 3 },
  { label: "Asia", id: 4 },
  { label: "Europe", id: 5 },
  { label: "Oceania", id: 6 },
];

const FilterSection = () => {
  const [show, setShow] = useState(false);
  const { countries, setCountries } = useCountries();
  const [commandRegion, setCommandRegion] = useState("Filter by Region");

  const [textFilter, setTextFilter] = useState("");

  const { setFilterCountries } = useFilter();

  useEffect(() => {
    setFilterCountries(countries);
  }, [countries]);

  const handleChange = () => {
    if (countries) {
      const filter = countries.filter((country) => {
        return country.name.common.toLowerCase().includes(textFilter);
      });
      setFilterCountries(filter);
    }
  };

  useEffect(() => {
    handleChange();
  }, [textFilter]);

  // for filter the data about her region

  const fetchData = async (type = "other", command) => {
    if (type === "all") {
      const data = await fetch(`https://restcountries.com/v3.1/${command}`);
      setCountries(await data.json());
    } else {
      const data = await fetch(
        `https://restcountries.com/v3.1/region/${command}`
      );
      setCountries(await data.json());
    }
  };
  const handleChangeCommand = (value) => {
    switch (value) {
      case "All":
        setCommandRegion("Filter by Region");
        fetchData("all", "all");
        break;
      case "Africa":
        setCommandRegion(value);
        fetchData("other", "africa");
        break;
      case "America":
        setCommandRegion(value);
        fetchData("other", "america");
        break;
      case "Asia":
        setCommandRegion(value);
        fetchData("other", "asia");
        break;
      case "Europe":
        setCommandRegion(value);
        fetchData("other", "europe");
        break;
      case "Oceania":
        setCommandRegion(value);
        fetchData("other", "oceania");
        break;
      default:
        break;
    }
  };
  const hideFilter = () => {
    document
      .querySelector("body")
      .addEventListener("keyup", (e) => e.key === "Escape" && setShow(false));
  };
  hideFilter();

  return (
    <div className="filter-section">
      <div className="container">
        <div className="search-country">
          <IoSearch />
          <input
            type="text"
            placeholder="Search for a country..."
            value={textFilter}
            onChange={(e) => {
              setTextFilter(e.target.value);
              handleChange();
            }}
          />
          <IoClose onClick={() => setTextFilter("")} />
        </div>
        <div className="search-region">
          <div
            className="text"
            onClick={() => setShow(!show)}>
            <p>{commandRegion}</p>
            <MdKeyboardArrowLeft className={`${show && "rotate"}`} />
          </div>
          <ul
            className={`${show ? "active" : ""}`}
            tabIndex={1}
            onBlur={() => setShow(false)}>
            {commandsFilter.map((ele) => {
              return (
                <li
                  key={ele.id}
                  name={ele.label}
                  onClick={() => handleChangeCommand(ele.label)}>
                  {ele.label}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
