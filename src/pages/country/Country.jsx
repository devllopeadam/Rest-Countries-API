/* eslint-disable no-unused-vars */
import { useLoaderData, useParams } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { useEffect } from "react";
import Back from "../../components/Back/Back";
import Detail from "../../components/Detail/Detail";

const Country = () => {
  const { name } = useParams();

  const country = useLoaderData();

  return (
    <div className="details-country">
      <div className="container">
        <Back />
        <Detail country={country} />
      </div>
    </div>
  );
};

export const countryLoader = async ({ params }) => {
  const { name } = params;

  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);

  if (!res.ok) {
    throw Error("This is not a country name");
  }
  return await res.json();
};

export default Country;
