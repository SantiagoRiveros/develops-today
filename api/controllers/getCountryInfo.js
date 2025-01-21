const axios = require("axios");

const getCountryInfo = async (req, res) => {
  const { code } = req.params;

  try {
    const countryInfoResponse = await axios.get(
      `https://date.nager.at/api/v3/CountryInfo/${code}`
    );
    const borderCountries = countryInfoResponse.data.borders || [];

    const populationResponse = await axios.post(
      "https://countriesnow.space/api/v0.1/countries/population",
      {
        country: countryInfoResponse.data.commonName,
      }
    );
    const populationData = populationResponse.data.data || [];

    const flagResponse = await axios.post(
      "https://countriesnow.space/api/v0.1/countries/flag/images",
      {
        country: countryInfoResponse.data.commonName,
      }
    );
    const flagUrl = flagResponse.data.data.flag || "";

    res.json({
      country: countryInfoResponse.data.commonName,
      borders: borderCountries,
      populationData,
      flagUrl,
    });
  } catch (error) {
    console.error("Error when fetching country data:", error.message);
    res.status(500).send("Error when fetching country data:");
  }
};

module.exports = { getCountryInfo };
