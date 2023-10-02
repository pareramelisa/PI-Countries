import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getAllCountries,
  orderByName,
  orderByPoblation,
  filterByContinent,
  getActivities,
  filterByActivities,
} from "../redux/actions";
import { useState } from "react";
import Card from "./Card";
import Paginated from "./Paginated/Paginated";
import style from "./Countries.module.css";

const Countries = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries); //traemos el estado con todos los paises
  const activities = useSelector((state) => state.activities); //traemos el estado con todas las actividades

  const [orden, setOrden] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const [paisesPagina, setPaisesPagina] = useState(10);
  const indexLastPais = paginaActual * paisesPagina; //paginado ?
  const indexPrimerPais = indexLastPais - paisesPagina;
  const paisesPActual = countries.slice(indexPrimerPais, indexLastPais);

  const paginado = (numeroPagina) => {
    setPaginaActual(numeroPagina);
  };

  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getActivities());
  }, [dispatch]);

  function handleOrderName(event) {
    event.preventDefault(); // evitamos que el boton haga un submit del formulario cuando se hace click                                                 // submit significa que el navegador va a enviar los datos del formulario a un servidor, en este caso no queremos eso
    if (event.target.value === "") {
      dispatch(getAllCountries());
    }
    dispatch(orderByName(event.target.value)); //despacha la action order by name
    setPaginaActual(1);
    setOrden(`${event.target.value}`);
  }

  function handleOrderPob(event) {
    //en todos los handlers le vamos a decir que si el valude el select es un string vacio los daspeche todos los paises y si no que nos muestre en la pagina actual los paises ordenados
    event.preventDefault();
    if (event.target.value === "") {
      dispatch(getAllCountries());
    }
    dispatch(orderByPoblation(event.target.value));
    setPaginaActual(1);
    setOrden(`Ordenado ${event.target.value}`);
  }

  function handleFilterContinent(event) {
    event.preventDefault();
    if (event.target.value === "All") {
      dispatch(getAllCountries());
    }
    dispatch(filterByContinent(event.target.value));
    setPaginaActual(1);
  }

  const handleFilterByActivities = (event) => {
    event.preventDefault();
    if (event.target.value === "All") {
      dispatch(getAllCountries());
    }
    dispatch(filterByActivities(event.target.value));
    setPaginaActual(1);
  };

  return (
    <div>
      <div className={style.contenedorFilter}>
        <div>
          <select
            onChange={(event) => handleOrderName(event)}
            className={style.select}
          >
            <option key="1" value="">
              Alfabético
            </option>
            <option key="2" value="asc">
              A-Z
            </option>
            <option key="3" value="desc">
              Z-A
            </option>
          </select>
        </div>
        <div>
          <select
            className={style.select}
            onChange={(event) => handleOrderPob(event)}
          >
            <option value="">Población</option>
            <option value="asc">Menor a mayor</option>
            <option value="desc">Mayor a menor</option>
          </select>
        </div>

        <div>
          <select className={style.select} onChange={handleFilterContinent}>
            {" "}
            //pasarle o no con la flecha y el event?
            <option value="All">Continent</option>
            <option value="Asia">Asia</option>
            <option value="Americas">Americas</option>
            <option value="Africa">Africa</option>
            <option value="Antarctic">Antarctic</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>

        <select className={style.select} onChange={handleFilterByActivities}>
          <option value="All">Turistic Activities</option>
          {activities?.map((activity, index) => (
            <option key={index} value={activity.name}>
              {activity.name}
            </option>
          ))}
        </select>
      </div>

      <div className={style.cardsContenedor}>
        {paisesPActual.length === 0 ? (
          <>
            <h1>Not countries match</h1>
          </>
        ) : (
          paisesPActual.map((country) => {
            //mapeamos los paises que hay guardados en el estado de la pagina actual para que nos renderice las cards de 10 en 10
            return (
              <Card
                imageFlag={country.imageFlag}
                name={country.name}
                continent={country.continent}
                id={country.id}
                key={country.id}
              />
            );
          })
        )}
      </div>

      <div>
        <Paginated
          paisesPagina={paisesPagina}
          paises={countries.length}
          paginado={paginado}
        />
      </div>
    </div>
  );
};

export default Countries;
