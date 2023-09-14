const getActivities = require('../controllers/getActivities');
const getAllCountries = require('../controllers/getAllCountries')
const getCountriesById = require("../controllers/getCountriesById")
const getCountriesByName = require("../controllers/getCountriesByName");
const postActivities = require('../controllers/postActivities');
require("dotenv").config();

const router = require('express').Router()

router.get("/countries/name", getCountriesByName)
router.get("/countries/:idPais", getCountriesById)
router.get("/countries", getAllCountries)

router.post("/activities", postActivities)
router.get("/activities", getActivities)


module.exports = router;
