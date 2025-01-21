const axios = require("axios");

const getAvailableCountries = async (req, res) => {
  try {
    const response = await axios.get(
      "https://date.nager.at/api/v3/AvailableCountries"
    );
    res.json(response.data); // Devolver lista de países
  } catch (error) {
    console.error("Error al obtener países disponibles:", error.message);
    res.status(500).send("Error al obtener países disponibles.");
  }
};

module.exports = { getAvailableCountries };
