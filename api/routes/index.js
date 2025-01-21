const express = require("express");
const { getAvailableCountries } = require("../controllers/getCountries");
const { getCountryInfo } = require("../controllers/getCountryInfo");

const router = express.Router();

router.get("/countries", getAvailableCountries);
router.get("/country/:code", getCountryInfo);

module.exports = router;
