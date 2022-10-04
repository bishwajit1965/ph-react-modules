import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Country";
import "./Country.css";

const Country = () => {
  const country = useLoaderData()[0];
  return (
    <div>
      <h3>Country: {country.name.common}</h3>
      <p>Capital: {country.capital}</p>
      <p>Timezone: {country.timezones}</p>
      <p>Currency{country.currencies.name}</p>
      <p>Continent: {country.continents}</p>
      <p>Country code: {country.idd.root}</p>
      <span>Currency logo: </span>
      <img className="country-coin-logo" src={country.coatOfArms.png} alt="" />
      <span>Flag: </span>
      <img className="country-flag" src={country.flags.png} alt="" />
    </div>
  );
};

export default Country;
