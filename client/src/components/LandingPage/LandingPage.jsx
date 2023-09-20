import { Link } from "react-router-dom";
import image from "./ImageLandingPage.jpg"
import style from "./LandingPage.module.css"

const LandingPage = () => {
  return (
    <div className= {style.contenedor}>
      <div className= {style.image}><img src= {image} alt="Img not found"/></div>
      <div>
        <h1>¡Bienvenido a mi aplicación de países!</h1>
      </div>
      <div>
        <Link to="/countries">
          <button>¡Comencemos!</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
