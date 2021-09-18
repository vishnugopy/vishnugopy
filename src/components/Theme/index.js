import "./style.scss";
import { useEffect } from "react";
import Brightness4RoundedIcon from "@mui/icons-material/Brightness4Rounded";

const Theme = () => {
  useEffect(() => {
    const toggle = document.getElementById("darktheme");

    toggle.addEventListener("click", () => {
      document.documentElement.classList.toggle("darkhtml");
    });
  }, []);

  return (
    <div className="theme">
      <div id="darktheme">
        <Brightness4RoundedIcon />
        <p>ThemeToggle</p>
      </div>
    </div>
  );
};

export default Theme;
