import "./style.scss";
import { BsArrowUpRightCircle } from "react-icons/bs";

function WorkCard(props) {
  return (
    <div className="workcard">
      <div className="workplace">
        <h3>{props.name}</h3>

        <p className="about">{props.about}</p>
        <div className="tags">
          {props.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <a
          href={props.link}
          target="_blank"
          rel="noreferrer"
          className="projectbutton"
        >
          <p>Voir</p>
          <BsArrowUpRightCircle />
        </a>
      </div>
    </div>
  );
}

export default WorkCard;
