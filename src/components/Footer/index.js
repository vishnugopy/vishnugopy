import "./style.scss";
import { useEffect } from "react";
import Brightness4RoundedIcon from "@mui/icons-material/Brightness4Rounded";

const Footer = () => {
  useEffect(() => {
    const toggle = document.getElementById("darktheme");
    setThemeToggle(toggle);

    toggle.addEventListener("click", () => {
      document.documentElement.classList.toggle("darkhtml");
    });
  }, []);

  return (
    <div className="footer">
      <div id="darktheme">
        <Brightness4RoundedIcon />
        <p>Theme Toggle</p>
      </div>
    </div>
  );
};

export default Footer;
