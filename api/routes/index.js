const express = require("express");
const { getAvailableCountries } = require("../controllers/getCountries");
const { getCountryInfo } = require("../controllers/getCountryInfo");

const router = express.Router();

// Rutas
router.get("/countries", getAvailableCountries); // Endpoint to get available countries
router.get("/country/:code", getCountryInfo); // Endpoint yo get country info

module.exports = router;
