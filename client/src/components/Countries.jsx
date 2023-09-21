import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCountries, orderByName, orderByPoblation, filterByContinent} from "../redux/actions"
import { useState } from "react";
import Card from "./Card";
import Paginated from "./Paginated/Paginated";
import Nav from "./Nav/Nav"

const Countries = () => {

    const dispatch = useDispatch()
    const countries = useSelector((state) => state.countries)

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
      }, [dispatch])

      if (!countries) {
        return <div>Loading...</div>
    }

    function handleOrderName(event){
      dispatch(orderByName(event.target.value));
      setPaginaActual(1);
      setOrden(`Ordenado ${event.target.value}`);
  }

  function handleOrderPob(event){
    dispatch(orderByPoblation(event.target.value));
    setPaginaActual(1);
    setOrden(`Ordenado ${event.target.value}`);
  }

  function handleFilterContinent(event){
    dispatch(filterByContinent(event.target.value))
    setPaginaActual(1);
}

    return (
      <div>
        <div>
          <select onChange={(event) => handleOrderName(event)}>
            <option key="1" value="x">
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
          <select
            onChange={(e) => handleFilterContinent(e)}
          >
            <option key="1" value="">
              Continente
            </option>
            <option key="2" value="South America">
              South America
            </option>
            <option key="3" value="North America">
              North America
            </option>
            <option key="4" value="Antarctica">
              Antarctica
            </option>
            <option key="5" value="Europe">
              Europe
            </option>
            <option key="6" value="Oceania">
              Oceania
            </option>
            <option key="7" value="Asia">
              Asia
            </option>
            <option key="8" value="Africa">
              Africa
            </option>
          </select>
        </div>

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