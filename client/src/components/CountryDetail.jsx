import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountryDetail } from "../redux/actions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./CountryDetail.module.css";

const CountryDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams(); //me traigo el id que me viene por params
  const detailsCountry = useSelector((state) => state.details);
  console.log(detailsCountry.Activities) //undef NO HAY PROPIEDAD ACTIVITIES


  useEffect(() => {
    dispatch(getCountryDetail(id));
  }, [id, dispatch]); //array de dependencias, es lo que necesita el use effect, o lo que depende de el

  return (
    <>
  
    <div className={style.contenedor}>
      <div className={style.imagen}>
        <img src={detailsCountry.imageFlag} alt="image not found" />
      </div>
      <div className={style.data}>
        <h1 className={style.h1}> 🌎 {detailsCountry.name}</h1>
        <h5 className={style.h5}>✅ ID: {detailsCountry.id}</h5>
        <h5 className={style.h5}>✅ CAPITAL: {detailsCountry.capital}</h5>
        <h5 className={style.h5}>✅ SUBREGION: {detailsCountry.subregion}</h5>
        <h5 className={style.h5}>✅ AREA: {detailsCountry.area} km2</h5>
        <h5 className={style.h5}>✅ POPULATION: {detailsCountry.population}</h5>
      </div>

   
    </div>
    <div className={style.activitiesContainer}>
    <h1>Tourist Activities 🗻🌳🚴‍♂️</h1>
        {detailsCountry.Activities?.map((actividad, index) => {
          return (
            <article key={index}>
              <div className={style.boxActivity}>
                <h3>✔️ Name: {actividad.name}</h3>
                <p>✔️ Difficulty: {actividad.difficult}</p>
                <p>✔️ Season: {actividad.season}</p>
                <p>✔️ Duration (in hours): {actividad.duration}</p>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default CountryDetail;
