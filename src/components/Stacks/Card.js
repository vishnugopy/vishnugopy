import "./style.scss";

function Card(props) {
  return (
    <div className="logowithtext">
      <img
        src={props.img}
        alt={props.name}
      />
    </div>
  );
}

export default Card;
