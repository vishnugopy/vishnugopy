import { Link } from "react-router-dom";
import "./style.scss";

import Toggle from "../ThemeToggle";
import Logo from "../../assets/img/logo.svg";

function Header() {
  return (
    <header className="header">

      <div className="navs">
      <Toggle />
      </div>
    </header>
  );
}

export default Header;
