import { useDispatch, useSelector } from "react-redux";
import { createActivity, getAllCountries } from "../../redux/actions";
import { useEffect, useState } from "react";
import style from "./CreateActivity.module.css";
import image from "./image.svg";

const seasonOptions = ["Verano", "Otoño", "Invierno", "Primavera"];

const CreateActivity = () => {
  const dispatch = useDispatch();
  const paisesOptions = useSelector((state) => state.countries); //traemos los paises de el estado countries

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  const [errors, setErrors] = useState({
    name: false,
    difficult: false,
    duration: false,
    season: false,
    countries: false,
  });

  const [input, setInput] = useState({
    name: "",
    difficult: 0,
    duration: 0,
    season: [],
    countries: [],
  });

  const handlerInputChange = (event) => {
    if (event.target.name === "countries") {
      if (input.countries.includes(event.target.value)) {
        console.log("hola");
      } else {
        setInput({
          ...input,
          [event.target.name]: [
            ...input[event.target.name],
            event.target.value,
          ],
        });
      }
    } else {
      if (
        event.target.name === "difficult" ||
        event.target.name === "duration"
      ) {
        setInput({ ...input, [event.target.name]: Number(event.target.value) });
      } else {
        setInput({ ...input, [event.target.name]: event.target.value });
      }
    }
  };

  function handlerDeleteAllSelected(type) {
    setInput({ ...input, [type]: [] });
  }

  function handlerDeleteSelected(id, type) {
    setInput({ ...input, [type]: input[type].filter((item) => item !== id) });
  }

  function checkOnlyLetter(input) {
    const pattern = /^[a-zA-Z ]*$/;
    if (!pattern.test(input)) {
      setErrors({ ...errors, name: "Name cant contain numbers" });
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    dispatch(createActivity(input));
    alert("Your activity was successfully created");
  }

  return (
    <div className={style.background}>
      <form onSubmit={handleSubmit}>
        <div className={style.form}>
          <div className={style.inputContainer}>
            <label className={style.label}>Nombre</label>
            <input
              className={style.input}
              type="text"
              name="name"
              id="name"
              onChange={(event) => {
                handlerInputChange(event);
                checkOnlyLetter(event.target.value);
              }}
            />
            <h4>{errors.name}</h4>
          </div>

          <div className={style.inputContainer}>
            <label className={style.label}>Dificultad</label>
            <input
              className={style.input}
              onChange={handlerInputChange}
              name="difficult"
              id="difficult"
              type="range"
              min="1"
              max="5"
              step="1"
            />
            <h4>Difficult level: {input.difficult}</h4>
          </div>

          <div className={style.inputContainer}>
            <label className={style.label}>Duracion</label>
            <input
              onChange={handlerInputChange}
              className={style.input}
              min="1"
              max="24"
              type="number"
              name="duration"
              id="duration"
            />
          </div>

          <div className={style.inputContainer}>
            <label className={style.label}>Temporada</label>
            <select
              className={style.select}
              name="season"
              onChange={handlerInputChange}
            >
              {seasonOptions.map((option, index) => (
                <option
                  key={index}
                  value={option}
                  disabled={input.season.includes(option)}
                >
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className={style.inputContainer}>
            <label className={style.label}>Paises</label>
            <select
              className={style.select}
              name="countries"
              onChange={handlerInputChange}
            >
              {paisesOptions.map((option) => (
                <option
                  key={option.id}
                  value={option.id}
                  disabled={input.countries.includes(option.id)}
                >
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {input.countries.length > 0 && <h2>Selected Countries</h2>}
        <li className={style.paisIdContainer}>
          {input.countries.map((countrieId) => {
            return (
              <ul className={style.paisId} key={countrieId}>
                <button
                  className={style.x}
                  onClick={() => handlerDeleteSelected(countrieId, "countries")}
                >
                  X
                </button>
                {countrieId}
              </ul>
            );
          })}
        </li>

        {input.countries.length > 0 && (
          <button
            className={style.buttonRemove}
            onClick={() => handlerDeleteAllSelected("countries")}
          >
            Remove all countries
          </button>
        )}
        <div className={style.buttonContainer}>
          <button
            className={style.buttonCreate}
            type="submit"
            disabled={
              input.name === "" ||
              input.difficult === "" ||
              input.duration === "" ||
              input.season === "" ||
              input.countries.length === 0
            }
          >
            {" "}
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateActivity;
