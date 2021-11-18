import Draggable from "react-draggable";
import "./style.scss"
const Box = (props) => {
  return (
    <Draggable>
      <section className="box">{props.children}</section>
    </Draggable>
  );
};

export default Box;
