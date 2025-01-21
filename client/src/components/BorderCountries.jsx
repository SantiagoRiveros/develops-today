import React from "react";
import { Link } from "react-router-dom";

const BorderCountries = ({ borders }) => {
  if (!borders || borders.length === 0) {
    return <p>No hay países fronterizos.</p>;
  }

  return (
    <div>
      <h3>Países Fronterizos:</h3>
      <ul>
        {borders.map((border) => (
          <li key={border}>
            <Link to={`/country/${border}`}>{border}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BorderCountries;
