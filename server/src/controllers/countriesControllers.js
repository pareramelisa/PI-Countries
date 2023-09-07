// const axios = require("axios");

// const URL = "http://localhost:5000/countries";

// const getAllCountries = async (req, res) => {
//   try {
//     const { data } = await axios(`${URL}`);

//     if (!data) throw Error("Countries not found");

//     const countries = {
//       data,
//     };

//     res.status(200).json(countries);
//   } catch (error) {
//     return res.status(404).send(error.message);
//   }
// };

// const getCountryById = async (req, res) => {
//   try {
//   } catch (error) {}
// };

// const getCountriesByQuery = async (req, res) => {

// }

// module.exports = {
//     getAllCountries,
//     getCountryById,
//     getCountriesByQuery
// }
