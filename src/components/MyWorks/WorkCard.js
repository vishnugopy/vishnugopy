import "./style.scss";
import webicon from "../../assets/img/webicon.svg";

function WorkCard(props) {
  return (
    <div className="workcard">
      <div className="workplace">
        <img src={webicon} alt="web" className="webicon" />
        <p>{props.name}</p>
      </div>
      <a href={props.link} target="_blank" rel="noreferrer" className="projectbutton">
        <button >
          <span className="material-icons">public</span>
          <p>Visite</p>
        </button>
      </a>
    </div>
  );
}

export default WorkCard;
