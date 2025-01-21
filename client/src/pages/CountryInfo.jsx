import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PopulationChart from "../components/PopulationChart";
import styles from "../styles/CountryInfoPage.module.css";
import axios from "axios";

export default function CountryInfo() {
  const { code } = useParams();
  const [countryData, setCountryData] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Loader para esta página

  // Agregar estado para manejar el botón de navegación
  const [isButtonClicked, setIsButtonClicked] = useState(false); // Estado para mostrar loader durante la carga de datos

  useEffect(() => {
    if (!code) return;

    // Setea el estado de isButtonClicked a true cuando se hace click
    setIsButtonClicked(true);

    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/country/${code}`)
      .then((data) => {
        setCountryData(data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching country info:", error);
        setIsLoading(false);
      })
      .finally(() => {
        setIsButtonClicked(false); // Cuando termina la carga de datos, reseteamos el estado
      });
  }, [code]);

  if (isLoading || isButtonClicked)
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.loader}></div>
        <p>Loading country information...</p>
      </div>
    );

  if (!countryData)
    return <p className={styles.errorMessage}>Country not found.</p>;

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.backLink}>
        ← Back to Home
      </Link>
      <h1 className={styles.title}>
        {countryData.country}
        <img
          src={countryData.flagUrl}
          alt={`${countryData.country} flag`}
          className={styles.flag}
        />
      </h1>
      <h2 className={styles.subtitle}>Border Countries:</h2>
      <ul className={styles.borderList}>
        {countryData.borders.map((border) => (
          <li key={border.countryCode}>
            <Link
              to={`/country/${border.countryCode}`}
              className={styles.borderLink}
              onClick={() => setIsButtonClicked(true)} // Al hacer click en el enlace, muestra el loader
            >
              {border.commonName}
            </Link>
          </li>
        ))}
      </ul>
      <h2 className={styles.subtitle}>Population Data</h2>
      {countryData && (
        <div className={styles.chartContainer}>
          <PopulationChart data={countryData.populationData.populationCounts} />
        </div>
      )}
    </div>
  );
}
