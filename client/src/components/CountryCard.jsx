import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  return (
    <div className="country-card">
      <h2>{country.name}</h2>
      <Link to={`/country/${country.code}`}>
        <button>Ver más información</button>
      </Link>
    </div>
  );
};

export default CountryCard;
