const axios = require("axios");
const { Country } = require("../db");
const URL = "http://localhost:5000/countries";

const getAllCountries = async (req, res) => {
  try {
    const response = await axios.get(URL);
    const apiData = response.data;

    const countriesData = apiData.map((country) => {
      return {
        id: country.cca3,
        name: country.name.common || "No name",
        imageFlag: country.flags.png || "No flag",
        continent: country.region || "No continent",
        capital: country.capital?.[0] || "No capital",
        subregion: country.subregion || "No subregion",
        area: country.area || 0,
        population: country.population || 0,
      };
    });

    const existingCountries = await Country.findAll();

    const newCountries = countriesData.filter((country) => {
      return !existingCountries.find(
        (existingCountry) => existingCountry.id === country.id
      );
    });

    await Country.bulkCreate(newCountries);

   res.status(200).json(countriesData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = getAllCountries;
