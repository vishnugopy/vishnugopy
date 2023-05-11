import "./style.scss";

import Toggle from "../ThemeToggle";

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
