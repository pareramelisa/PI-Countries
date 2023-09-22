import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCountries, orderByName, orderByPoblation, filterByContinent, getActivities, filterByActivities} from "../redux/actions"
import { useState } from "react";
import Card from "./Card";
import Paginated from "./Paginated/Paginated";

const Countries = () => {

    const dispatch = useDispatch()
    const countries = useSelector((state) => state.countries)
    const activities = useSelector((state) => state.activities)

    const [orden, setOrden] = useState('')
    const [paginaActual, setPaginaActual]  = useState(1);
    const [paisesPagina, setPaisesPagina] = useState(10);
    const indexLastPais = paginaActual * paisesPagina;
    const indexPrimerPais = indexLastPais - paisesPagina;
    const paisesPActual = countries.slice(indexPrimerPais, indexLastPais);

    const paginado = (numeroPagina) =>{
      setPaginaActual(numeroPagina);
    }

    useEffect(() => {                                                        
        dispatch(getAllCountries())     
        dispatch(getActivities())                                                                               
      }, [dispatch])

      if (!countries) {
        return <div>Loading...</div>
    }

    function handleOrderName(event){
      event.preventDefault();                                                     // evitamos que el boton haga un submit del formulario cuando se hace click                                                 // submit significa que el navegador va a enviar los datos del formulario a un servidor, en este caso no queremos eso  
      if (event.target.value === "") {                                           // no queremos eso porque no tenemos un servidor, y no queremos que el navegador haga un refresh de la pagina
        dispatch(getAllCountries());
      }
      dispatch(orderByName(event.target.value));
      setPaginaActual(1);
      setOrden(`Ordenado ${event.target.value}`);
    }

  function handleOrderPob(event){
    event.preventDefault();                                                     // evitamos que el boton haga un submit del formulario cuando se hace click                                                 // submit significa que el navegador va a enviar los datos del formulario a un servidor, en este caso no queremos eso  
    if (event.target.value === "") {                                           // no queremos eso porque no tenemos un servidor, y no queremos que el navegador haga un refresh de la pagina
      dispatch(getAllCountries());
    }
    dispatch(orderByPoblation(event.target.value));
    setPaginaActual(1);
    setOrden(`Ordenado ${event.target.value}`);
  }

  function handleFilterContinent(event) {                                           // funcion que se ejecuta cuando se hace click en el boton de filtrar por continente
    event.preventDefault();                                                     // evitamos que el boton haga un submit del formulario cuando se hace click                                                 // submit significa que el navegador va a enviar los datos del formulario a un servidor, en este caso no queremos eso  
    if (event.target.value === "x") {                                           // no queremos eso porque no tenemos un servidor, y no queremos que el navegador haga un refresh de la pagina
      dispatch(getAllCountries());
    }
    dispatch(filterByContinent(event.target.value));                          // despachamos la accion filterByContinent, pasandole como parametro el valor del boton que se hizo click
    setPaginaActual(1)                                                    // cambiamos el estado local de la pagina actual a 1, para que se muestre la primera pagina
  }

  const handleFilterByActivities = (event) => {
    event.preventDefault();
    console.log(activities)
    if (event.target.value === "All") {
      dispatch(getAllCountries());
    }
    dispatch(filterByActivities(event.target.value));
    setPaginaActual(1);
   };

    return (
      <div>
        <div>
          <select onChange={(event) => handleOrderName(event)}>
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
          <select onChange={(event) => handleOrderPob(event)}>
            <option value="">Población</option>
            <option value="asc">Menor a mayor</option>
            <option value="desc">Mayor a menor</option>
          </select>
        </div>

        <div>
        <select onChange={handleFilterContinent}>
        <option value="x">Continent</option>
        <option value="All">All</option>
        <option value="Asia">Asia</option>
        <option value="Americas">Americas</option>
        <option value="Africa">Africa</option>
        <option value="Antarctic">Antarctic</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
       </select>
        </div>

        <select
        onChange={handleFilterByActivities}
        >
        <option value="All">
        Turistic Activities                                                       
        </option>                                                   
        {activities?.map((activity, index) => (                 // mapeamos el array de actividades, y creamos una opcion por cada actividad
          <option key={index} value={activity.name}>            
            {activity.name}                                     
          </option>
        ))}
      </select>

        {paisesPActual.map((country) => {
          return (
              <Card
                imageFlag={country.imageFlag}
                name={country.name}
                continent={country.continent}
                id={country.id}
                key={country.id}
              />
          );
        })}

        <div>
          <Paginated
            paisesPagina={paisesPagina}
            paises={countries.length}
            paginado={paginado}
          />
        </div>
      </div>
    );
}

export default Countries 