import { Link } from "react-router-dom";
import style from "./LandingPage.module.css";
import logo from "./tourify.png";

const LandingPage = () => {
  return (
    <div className={style.contenedor}>
      <div className={style.image}></div>

      <div className={style.form}>
        <div className={style.contenedorLogo}>
          <img className={style.logo} src={logo} alt="not found" />
        </div>

        <Link to="/countries">
          <div className={style.contenedorBtn}>
            <button className={style.button}>¿Dónde te gustaría ir?</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
