import axios from 'axios';
export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES'
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL'

export function getAllCountries() {
    return async function (dispatch) {
        try {

            const allCountries = await axios.get("http://localhost:3001/countries");

            return dispatch({
                type: "GET_ALL_COUNTRIES",
                payload: allCountries.data,   

            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getCountryDetail(id) {

    return async function (dispatch) {
        try {
            let countryDetail = await axios.get("http://localhost:3001/countries/" + id);
            return dispatch({
                type: 'GET_COUNTRY_DETAIL',
                payload: countryDetail.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}