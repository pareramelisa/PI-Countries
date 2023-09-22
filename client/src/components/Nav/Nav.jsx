import { Link } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav"

const Nav = () => {
  return (
    <div className={style.nav}>
      <Link to="/countries/create">
        <button className={style.btn}>Activities</button>
      </Link>
      <div>
        <SearchBar/>
      </div>
    </div>
  );
};

export default Nav 