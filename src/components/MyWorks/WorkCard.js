import "./style.scss";

function WorkCard(props) {
  return (
    <div className="workcard">
      <p>{props.name}</p>
      <img src={props.img} alt={props.name} />
      <a href={props.link} target="_blank" rel="noreferrer">
        <button className="projectbutton">
          <span className="material-icons">public</span>
          <p>Visite</p>
        </button>
      </a>
    </div>
  );
}

export default WorkCard;
