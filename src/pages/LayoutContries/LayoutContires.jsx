import { ThemeProvider } from "../../context/ThemeContext";
import Header from "../../components/header/Header";
import { Outlet } from "react-router-dom";
import { CountriesProvider } from "../../context/CountriesContext";
import { FilterProvider } from "../../context/FilterContext";

const LayoutContires = () => {
  return (
    <ThemeProvider>
      <Header />
      <CountriesProvider>
        <FilterProvider>
          <Outlet />
        </FilterProvider>
      </CountriesProvider>
    </ThemeProvider>
  );
};

export default LayoutContires;
