import { Link } from "react-router-dom";
import style from "./LandingPage.module.css"

const LandingPage = () => {
  return (
    <div className={style.contenedor}>
      <div className={style.image}>
  
       </div>
      
      <div className={style.form}>
        <h1>¡Bienvenido a mi aplicación de países!</h1>
        <Link to="/countries">
          <button>¡Comencemos!</button>
        </Link>
      </div>

    </div>
  );
};

export default LandingPage;
