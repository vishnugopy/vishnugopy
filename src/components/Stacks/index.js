import "./style.scss";
import Card from "./Card";

import react from "../../assets/img/stacks/react.svg";
import svg from "../../assets/img/stacks/svg.svg";
import js from "../../assets/img/stacks/js.svg";
import mysql from "../../assets/img/stacks/mysql.svg";
import html from "../../assets/img/stacks/html.svg";
import css from "../../assets/img/stacks/css.svg";
import worldpress from "../../assets/img/stacks/worldpress.svg";
import sass from "../../assets/img/stacks/sass.svg";
import node from "../../assets/img/stacks/node.svg";

function Stacks() {
  const cards = [
    {
      name: "React",
      img: react,
    },
    {
      name: "JavaScript",
      img: js,
    },
    {
      name: "MySQL",
      img: mysql,
    },
    {
      name: "Node.js",
      img: node,
    },
    {
      name: "HTML",
      img: html,
    },
    {
      name: "CSS",
      img: css,
    },
    {
      name: "SVG",
      img: svg,
    },
    {
      name: "Sass",
      img: sass,
    },
    {
      name: "WorldPress",
      img: worldpress,
    },
  ];

  return (
    <section className="maislider">
      <h2>Mes Stacks</h2>
      <div className="slider">
        {cards.map((card, index) => (
          <Card key={index} name={card.name} img={card.img} />
        ))}
      </div>
    </section>
  );
}

export default Stacks;
