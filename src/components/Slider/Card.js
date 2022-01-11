import "./style.scss";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link to={props.link} className="logowithtext">
      <img
        src={props.img}
        alt={props.name}
      />
      <span>{props.name}</span>
    </Link>
  );
}

export default Card;
