import "./style.scss";

function Card(props) {
  return (
    <a href={props.link} className="AppContainer">
      <img
        src={props.img}
        alt={props.name}
      />
      <span>{props.name}</span>
    </a>
  );
}

export default Card;
