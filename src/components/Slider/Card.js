import "./style.scss";

function Card(props) {
  return (
    <div className="logowithtext">
      <img
        src={props.img}
        alt={props.name}
      />
      <span>{props.name}</span>
    </div>
  );
}

export default Card;
