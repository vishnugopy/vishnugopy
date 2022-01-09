import { Link } from "react-router-dom";
import "./style.scss";

import Toggle from "../ThemeToggle";

function Header() {
  return (
    <header className="header">
      <Link to="/">Accuile</Link>
      <Link to="/playground">Terrain de jeu</Link>
      <Toggle />
    </header>
  );
}

export default Header;
