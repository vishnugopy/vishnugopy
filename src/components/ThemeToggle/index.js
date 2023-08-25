import "./style.scss";
import React from "react";
import { useState, useEffect } from "react";

function Toggle() {
  const [theme, setTheme] = useState(true);
  const [buttonToggle, setButtonToggle] = useState("");

  useEffect(() => {
    const themebutton = document.querySelector(".toggle");
    setButtonToggle(themebutton);
  }, []);

  const checkTheme = () => {
    if (theme === true) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };
  checkTheme();

  const toggleTheme = () => {
    setTheme(!theme);
    localStorage.setItem("theme", theme);
    if (theme) {
      buttonToggle.style.justifyContent = "flex-end";
    } else {
      buttonToggle.style.justifyContent = "flex-start";
    }
  };

  return (
    <div className="theme-toggler">
      <div className="toggle" onClick={toggleTheme}>
        <div className="round"></div>
      </div>
    </div>
  );
}

export default Toggle;
