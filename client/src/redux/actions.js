import axios from 'axios';
export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES'
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL'
export const GET_COUNTRY_BY_NAME = 'GET_COUNTRY_BY_NAME'
export const ORDER_BY_NAME = 'ORDER_BY_NAME'
export const ORDER_BY_POBLATION = 'ORDER_BY_POBLATION'
export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT'
export const GET_ACTIVITIES = 'GET_ACTIVITIES'
export const FILTER_BY_ACTIVITIES = "FILTER_BY_ACTIVITIES"

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

export function getCountryByName(name) {
    return async function (dispatch) {
        try {
            const countryName = await axios.get("http://localhost:3001/countries/name?name=" + name);
            return dispatch({
                type: 'GET_COUNTRY_BY_NAME',
                payload: countryName.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function orderByName (payload) {
    return {
        type: 'ORDER_BY_NAME',
        payload
        }
    }

export function orderByPoblation (payload) {
    return {
        type: 'ORDER_BY_POBLATION',
        payload
        }
    }

export const filterByContinent = (payload) =>{
    return{
        type: FILTER_BY_CONTINENT,
        payload
        }
    }

export function getActivities() {
    return async function (dispatch) {
        try {
    
            const activities = await axios.get("http://localhost:3001/activities");
    
            return dispatch({
                type: "GET_ACTIVITIES",
                payload: activities.data,   
    
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const filterByActivities = (payload) =>{
    return{
        type: FILTER_BY_ACTIVITIES,
        payload
        }
    }
