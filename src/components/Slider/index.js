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

function Slider() {
  const cards = [
    {
      name: "React",
      img: react,
      link: "/react",
    },
    {
      name: "HTML",
      img: html,
      link: "/vue",
    },
    {
      name: "CSS",
      img: css,
      link: "/css",
    },
    {
      name: "SVG",
      img: svg,
      link: "/svg",
    },
    {
      name: "JavaScript",
      img: js,
      link: "/javascript",
    },
    {
      name: "MySQL",
      img: mysql,
      link: "/mysql",
    },
    {
      name: "Node.js",
      img: node,
      link: "/node",
    },
    {
      name: "Sass",
      img: sass,
      link: "/sass",
    },
    {
      name: "WorldPress",
      img: worldpress,
      link: "/worldpress",
    },
    
  ];

  return (
    <section className="maislider">
      <h2>Mes Piles</h2>
      <div className="slider">
      {cards.map((card, index) => (
        <Card key={index} name={card.name} img={card.img} link={card.link} />
      ))}
      </div>
    </section>
  );
}

export default Slider;
