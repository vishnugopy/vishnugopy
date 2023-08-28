import "./style.scss";
import React from "react";
import { useState, useEffect } from "react";

function Toggle() {
  const [theme, setTheme] = useState(true);
  const themebutton = document.querySelector(".toggle");

  useEffect(() => {
    const checkTheme = () => {
      if (theme === false || localStorage.getItem("theme") === "true") {
        document.body.classList.remove("dark");
      } else {
        document.body.classList.add("dark");
      }
    };

    checkTheme();
  }, [theme]);

  const toggleTheme = () => {
    setTheme(!theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <div className="themeToggler" onClick={toggleTheme}>
      Changez de thème
    </div>
  );
}

export default Toggle;
