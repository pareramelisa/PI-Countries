import { Link } from "react-router-dom";
import style from "./LandingPage.module.css"

const LandingPage = () => {
  return (
    <div className={style.contenedor}>
      <div className={style.image}>
  
       </div>
      
      <div className={style.form}>
        <img src="/tourify.PNG" alt="not found" />
        <h1>Tourify</h1>
        <h2> <p>Descubrí el mundo</p> <p>Creá experiencias únicas</p></h2>
        <Link to="/countries">
          <button>¿Dónde te gustaría ir?</button>
        </Link>
      </div>

    </div>
  );
};

export default LandingPage;
