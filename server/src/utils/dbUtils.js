// const axios = require("axios");
// require("dotenv").config();
// const { Country } = require("../db")
// const { API_URL } = process.env;


// const formatCountryData = (countryData) => {
//   return {
//     id: countryData.cca3,
//     name: countryData.name.common || "No name",
//     imageFlag: countryData.flags.svg || "No flag",
//     continent: countryData.region || "No continent",
//     capital: countryData.capital?.[0] || "No capital",
//     subregion: countryData.subregion || "No subregion",
//     area: countryData.area || 0,
//     population: countryData.population || 0,
//   };
// };
// const saveCountriesToDB = async () => {
//   try {
//     fetch(API_URL).then( response => response.json() )
//     .then(data => data.map( c => Country.create ({
//         id: c.cca3,
//         name: c.name.official,
//         imageFlag: c.flags.png,
//         continent: c.region,
//         capital: c.capital[0],
//         subregion: c.subregion,
//         area: c.area,
//         population: c.population,
//         })))
//     .catch(err=> console.log(err));

//     console.log(`${newCountries.length} countries saved to database`);
//   } catch (error) {
//     console.error("Error saving countries to database:", error);
//   }

//   console.log("pepe" + Country)
// };
// module.exports = { saveCountriesToDB };