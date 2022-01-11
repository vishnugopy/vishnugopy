import "./style.scss";
import Card from "./Card";

function Slider() {
  return (
    <section className="mainslider">
      <Card
        name="React"
        img="https://coollogo.net/wp-content/uploads/2021/03/React-logo.svg"
        link="https://reactjs.org/"
      />
    </section>
  );
}

export default Slider;
