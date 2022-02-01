import "./style.scss";

function WorkCard(props) {
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
          <span className="material-icons">public</span>
          <p>Visite</p>
        </a>
      </div>
    </div>
  );
}

export default WorkCard;
