import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import logo from "./logo.png";

const Nav = () => {
  return (
    <div className={style.nav}>
      <div className={style.logoContenedor}>
        <Link to="/countries">
          <img src={logo} alt="" />
        </Link>
      </div>
      <Link to="/countries/create">
        <button className={style.btn}>Create your tourist activity!</button>
      </Link>
      <div className={style.searchbar}>
        <SearchBar />
      </div>
    </div>
  );
};

export default Nav;
