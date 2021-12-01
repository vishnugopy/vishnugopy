import "./style.scss";
import { useEffect, useState } from "react";
import Brightness4RoundedIcon from "@mui/icons-material/Brightness4Rounded";

const Theme = () => {
  useEffect(() => {
    const buttontext = document.getElementById("themetext");
    const toggle = document.getElementById("darktheme");
    toggle.addEventListener("click", () => {
      document.documentElement.classList.toggle("darkhtml");
      if (document.documentElement.classList.contains("darkhtml")) {
        buttontext.innerText = "LightMode";
      } else {
        buttontext.innerText = "DarktMode";
      }
    });
  }, []);
  
  

  return (
    <div id="darktheme" className="theme">
      <Brightness4RoundedIcon />
      <p id="themetext">Theme</p>
    </div>
  );
};

export default Theme;
