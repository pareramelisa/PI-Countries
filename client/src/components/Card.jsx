import { NavLink } from "react-router-dom";
import style from "./Card.module.css";

const Card = ({ imageFlag, name, continent, id }) => {
  return (
    <div className={style.cardContenedor}>
      <img src={imageFlag} alt="Img not found" width="200px" height="250px" />
      <h3 className={style.name}>{name}</h3>
      <h5 className={style.continent}>{continent}</h5>
      <NavLink to={`/countries/${id}`}>
        <button className={style.button}>Details</button>
      </NavLink>
    </div>
  );
};

export default Card;
