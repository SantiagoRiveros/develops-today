import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/CountryPage.module.css";
import axios from "axios";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Nuevo estado para el loader

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/countries`)
      .then((data) => {
        setCountries(data.data);
        setIsLoading(false); // Apagar el loader cuando se carguen los datos
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false); // Apagar el loader incluso si hay error
      });
  }, []);

  return (
    <div className={styles.container}>
      <h1>Available Countries</h1>
      {isLoading ? ( // Mostrar el loader mientras se cargan los datos
        <div className={styles.loaderContainer}>
          <div className={styles.loader}></div>
          <p>Loading countries...</p>
        </div>
      ) : (
        <ul className={styles.countryList}>
          {countries.length ? (
            countries.map((country) => (
              <li key={country.countryCode}>
                <Link
                  to={`/country/${country.countryCode}`}
                  className={styles.countryLink}
                >
                  {country.name}
                </Link>
              </li>
            ))
          ) : (
            <p>No countries available.</p>
          )}
        </ul>
      )}
    </div>
  );
}
