const axios = require("axios");

const getCountryInfo = async (req, res) => {
  const { code } = req.params;

  try {
    // Obtener lista de países fronterizos
    const countryInfoResponse = await axios.get(
      `https://date.nager.at/api/v3/CountryInfo/${code}`
    );
    const borderCountries = countryInfoResponse.data.borders || [];

    // Obtener datos históricos de población
    const populationResponse = await axios.post(
      "https://countriesnow.space/api/v0.1/countries/population",
      {
        country: countryInfoResponse.data.commonName,
      }
    );
    const populationData = populationResponse.data.data || [];

    // Obtener URL de la bandera
    const flagResponse = await axios.post(
      "https://countriesnow.space/api/v0.1/countries/flag/images",
      {
        country: countryInfoResponse.data.commonName,
      }
    );
    const flagUrl = flagResponse.data.data.flag || "";

    // Construir respuesta
    res.json({
      country: countryInfoResponse.data.commonName,
      borders: borderCountries,
      populationData,
      flagUrl,
    });
  } catch (error) {
    console.error("Error al obtener información del país:", error.message);
    res.status(500).send("Error al obtener información del país.");
  }
};

module.exports = { getCountryInfo };
