import "./style.scss";
import { BsArrowUpRightCircle } from "react-icons/bs";

function WorkCard(props) {
  return (
    <a href={props.link} rel="noreferrer" className="workcard">
      <div className="workplace">
        <h3>{props.name}</h3>

        <p className="about">{props.about}</p>
        <div className="tags">
          {props.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <BsArrowUpRightCircle />
      </div>
    </a>
  );
}

export default WorkCard;
