import { Link } from "react-router-dom";
import "./style.scss";

import Toggle from "../ThemeToggle";
import Logo from "../../assets/img/logo.svg";

function Header() {
  return (
    <header className="header">
      <Link to="/"><img src={Logo} alt="logo" className="logo"/></Link>
      <Link className="notfortel" to="/playground">Terrain de jeu</Link>
      <Toggle />
    </header>
  );
}

export default Header;
