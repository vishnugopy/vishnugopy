import { useEffect } from "react";
import "./style.scss";

function WorkCard(props) {
  function randomHsl() {
    return "hsla(" + Math.random() * 360 + ", 100%, 50%, 0.05)";
  }

  useEffect(() => {
    const Tags = document.querySelectorAll(".tags span");

    Tags.forEach((element) => {
      element.style.background = randomHsl();
    });
  }, []);

  return (
    <div className="workcard">
      <div className="workplace">
        <h3>{props.name}</h3>
        <img src={props.img} alt="web" className="webicon" />
        <div className="tags">
          {props.tags.map((tag, index) => (
            <span key={index}>#{tag}</span>
          ))}
        </div>
        <a
          href={props.link}
          target="_blank"
          rel="noreferrer"
          className="projectbutton"
        >
          <button>
            <span className="material-icons">public</span>
            <p>Visite</p>
          </button>
        </a>
      </div>
    </div>
  );
}

export default WorkCard;
