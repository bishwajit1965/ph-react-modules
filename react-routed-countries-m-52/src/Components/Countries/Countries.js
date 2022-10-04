import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./Countries.css";

const Countries = () => {
  const countries = useLoaderData();
  return (
    <>
      <h3>All countries {countries.length}</h3>
      <div className="container">
        {countries.map((country) => (
          <ul>
            <li key={country.cca3}>
              <Link to={`country/${country.name.common}`}>
                {country.name.common}
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default Countries;
