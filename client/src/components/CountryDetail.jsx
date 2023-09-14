import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountryDetail } from "../redux/actions";
import { useEffect } from "react";
import { useParams } from "react-router-dom"

const CountryDetail = () => {

    const dispatch = useDispatch()
    const { id } = useParams()
    const detailsCountry = useSelector(state => state.details)

    useEffect(() => {                                                        
        dispatch(getCountryDetail(id))                                                                                    
      }, [id, dispatch])

    return (
      <div>
        <div>
          <img src={detailsCountry.imageFlag} alt="image not found" />
        </div>
        <div>
          <h1> {detailsCountry.name}</h1>
          <h5>ID: {detailsCountry.id}</h5>
          <h5>CAPITAL: {detailsCountry.capital}</h5>
          <h5>SUBREGION: {detailsCountry.subregion}</h5>
          <h5>AREA: {detailsCountry.area} km2</h5>
          <h5>POPULATION: {detailsCountry.population}</h5>
          <h5>ACTIVITIES: </h5>
        </div>
      </div>
    );
}

export default CountryDetail