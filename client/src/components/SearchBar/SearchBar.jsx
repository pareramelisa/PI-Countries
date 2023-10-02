import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryByName } from "../../redux/actions";
import style from "./SearchBar.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [nombrePais, setNombrePais] = useState("");
  const paises = useSelector((state) => state.countries);

  const onInputChange = (evento) => {
    setNombrePais(evento.target.value); //guardamos en el estado el valor q llega en el input //con esta fn agarramos lo que entra en el input
  };

  const onSubmit = (evento) => {
    evento.preventDefault();
    if (nombrePais.length === 0) return alert("Introduzca un país para buscar"); //si no se introduce nombre arroja un alert, y si no despacha la ccion by name pasandole el nombre q llego en el input y actualiza el estado
    dispatch(getCountryByName(nombrePais));
    setNombrePais("");
  };

  return (
    <div className={style.searchContenedor}>
      <input
        className={style.input}
        type="search"
        placeholder="Search your next destination..."
        onChange={(event) => onInputChange(event)}
        value={nombrePais} //el valor que ingresa en el input
      />
      <div className={style.buttonContainer}>
        <button
          className={style.button}
          type="submit"
          onClick={(event) => onSubmit(event)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
