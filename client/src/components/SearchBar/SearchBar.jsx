import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryByName } from '../../redux/actions';


const SearchBar = () => {

  const dispatch = useDispatch()
  const [nombrePais, setNombrePais] = useState("")
  const paises = useSelector(state => state.countries)
  // console.log(paises)

  const onInputChange = (evento) => {
    setNombrePais(evento.target.value);
    }

  const onSubmit = (evento) =>{
    evento.preventDefault();
    if(nombrePais.length === 0) return alert("Introduzca un país para buscar");
    dispatch(getCountryByName(nombrePais))
    setNombrePais('')
  }

    return (
      <div>
        <input
          
          type="search"
          placeholder="Search..."
          onChange={(event) => onInputChange(event)}
          value={nombrePais}
        
        />
        <button
          type="submit"
          onClick={(event) => onSubmit(event)}
        >
          Search
        </button>

      </div>
    );
}

export default SearchBar