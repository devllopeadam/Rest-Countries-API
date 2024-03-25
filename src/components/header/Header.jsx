/* eslint-disable no-unused-vars */
import "./header.scss";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";

const Header = () => {
  const HTML = document.querySelector("html");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (getDataFromLocalStorage() === "light") {
      HTML.dataset.theme = "dark";
    } else {
      HTML.dataset.theme = "light";
    }
  }, [theme]);

  function getDataFromLocalStorage() {
    return localStorage.getItem("theme");
  }

  return (
    <div className="header">
      <div className="container">
        <Link to={"/"}>Where in the world?</Link>
        <div
          className="theme"
          onClick={toggleTheme}>
          <div className="icon">
            {theme === "light" ? <FaSun /> : <FaMoon />}
          </div>
          <p>{theme === "light" ? "Light" : "Dark"} Mode</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
