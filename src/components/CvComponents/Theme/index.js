import "./style.scss";
import { useEffect } from "react";
import Brightness4RoundedIcon from "@mui/icons-material/Brightness4Rounded";

const Theme = () => {
  useEffect(() => {
    const toggle = document.getElementById("darktheme");
    toggle.addEventListener("click", () => {
      document.documentElement.classList.add("darkhtml");
      localStorage.setItem("darktheme", "true");
    });

    if (localStorage.getItem("darktheme") === "true") {
      document.documentElement.classList.add("darkhtml");
      toggle.addEventListener("click", () => {
        document.documentElement.classList.remove("darkhtml");
        localStorage.setItem("darktheme", "false");
      });
    }
  }, []);

  return (
    <div id="darktheme" className="theme">
      <Brightness4RoundedIcon />
      <p>Theme</p>
    </div>
  );
};

export default Theme;
