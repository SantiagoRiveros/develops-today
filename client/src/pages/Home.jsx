import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/CountryPage.module.css";
import axios from "axios";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/countries`)
      .then((data) => {
        setCountries(data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h1>Available Countries</h1>
      {isLoading ? (
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
