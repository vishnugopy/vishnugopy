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
import npm from "../../assets/img/stacks/npm.svg";
import vscode from "../../assets/img/stacks/vscode.svg";
import github from "../../assets/img/stacks/github.svg";
import linux from "../../assets/img/stacks/linux.svg";
import bootstrap from "../../assets/img/stacks/bootstrap.svg";
import materialui from "../../assets/img/stacks/mui.svg";
import blender from "../../assets/img/stacks/blender.svg";
import adobe from "../../assets/img/stacks/adobe.svg";

function Stacks() {
  const cards = [
    {
      img: react,
    },
    {
      img: js,
    },
    {
      img: mysql,
    },
    {
      img: node,
    },
    {
      img: html,
    },
    {
      img: css,
    },
    {
      img: svg,
    },
    {
      img: sass,
    },
    {
      img: worldpress,
    },
    {
      img: npm,
    },
    {
      img: linux,
    },
    {
      img: github,
    },
    {
      img: vscode,
    },
    {
      img: bootstrap,
    },
    {
      img: materialui,
    },
    {
      img: blender,
    },
    {
      img: adobe,
    },
  ];

  return (
    <section className="maislider">
      <h2>Mes stacks .</h2>
      <div className="slider">
        {cards.map((card, index) => (
          <Card key={index} name={card.name} img={card.img} />
        ))}
      </div>
    </section>
  );
}

export default Stacks;
