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
    },   {
      name: "NPM",
      img: npm,
    },
    {
      name: "Linux",
      img: linux,
    },
    {
      name: "GitHub",
      img: github,
    },
    {
      name: "VS Code",
      img: vscode,
    },
    {
      name: "Bootstrap",
      img: bootstrap,
    },
    {
      name: "Material UI",
      img: materialui,
    },
    {
      name: "Blender",
      img: blender,
    },
    {
      name: "Pack Adobe",
      img: adobe,
    },
  ];

  return (
    <section className="maislider">
      <h2>Mes Stacks Outils que j'adore </h2>
      <div className="slider">
        {cards.map((card, index) => (
          <Card key={index} name={card.name} img={card.img} />
        ))}
      </div>
    </section>
  );
}

export default Stacks;
