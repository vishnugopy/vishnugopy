import "./style.scss";
import { useEffect } from "react";

import SocialButtons from "../../components/SocialButtons";
import Stacks from "../../components/Stacks";
import MyWorks from "../../components/MyWorks";

function PlayGround() {
  function randomHsl() {
    return "hsla(" + Math.random() * 360 + ", 100%, 50%, 0.5)";
  }

  useEffect(() => {
    const nameElement = document.querySelectorAll(".my-name h1");
    nameElement.forEach((element) => {
      element.addEventListener("mouseover", () => {
        element.style.color = randomHsl();
      });
    });
  }, []);

  return (
    <section className="home">
      <main>
        <div className="hero-section">
          <div className="my-name">
            <h1>V</h1>
            <h1>I</h1>
            <h1>S</h1>
            <h1>H</h1>
            <h1>N</h1>
            <h1>U</h1>
            <h1>G</h1>
            <h1>O</h1>
            <h1>P</h1>
            <h1>Y</h1>
          </div>
          <div className="positions">
            <span className="my-position">Développeur web</span>
          </div>
       
        <SocialButtons/>
        </div>
        <Stacks />
        <MyWorks />
      </main>
    </section>
  );
}

export default PlayGround;
