
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1>¡Bienvenido a mi aplicación de países!</h1>
      <Link to="/countries">
        <button>¡Comencemos!</button>
      </Link>
    </div>
  );
};

export default LandingPage