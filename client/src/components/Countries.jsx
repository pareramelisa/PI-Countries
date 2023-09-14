import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCountries } from "../redux/actions"
import { useState } from "react";
import Card from "./Card";

const Countries = () => {

    const dispatch = useDispatch()
    const countries = useSelector((state) => state.allCountries)

    useEffect(() => {                                                        
        dispatch(getAllCountries())                                                                                    
      }, [dispatch])

      if (!countries) {
        return <div>Loading...</div>
    }

    return (
        <div>
            {
                countries.map((country) => {
                    return (
                        <div>
                            <Card
                            imageFlag = {country.imageFlag}                            
                            name = {country.name}
                            continent = {country.continent}
                            id = {country.id}
                            key = {country.id}
                            />                       
                        </div>
                   
                    )
                })
            }
        </div>
    )
}

export default Countries 