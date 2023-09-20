import { Link } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav"

const Nav = () => {
  return (
    <div className={style.nav}>
      <button className={style.btn}>Activities</button>
      <div>
        <SearchBar/>
      </div>
    </div>
  );
};

export default Nav 