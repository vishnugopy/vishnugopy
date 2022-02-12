import "./style.scss";
import WorkCard from "./WorkCard";

import webicon from "../../assets/img/webicon.svg";

function MyWorks() {
  const cards = [
    {
      name: "Ambient It",
      link: "https://www.ambient-it.net/",
      img: webicon,
      tags: ["Php" , "HTML", "CSS", "SVG", "Animations", "Responsive"],
    },
    {
      name: "Same Still A Meal",
      link: "https://www.samestillameal.com/",
      img: webicon,
      tags: ["React" , "JavaScript", "SCSS", "ExpressJs", "NodeJs" , "SQL" , "Responsive"],
    },
    {
      name: "The Best Talks",
      link: "https://thebesttalks.blogspot.com",
      img: webicon,
      tags: ["Blogger" , "Intergration", "Responsive"],
    },
  ];

  return (
    <section className="maislider">
      <h2>
        Les sites sur lesquels j'ai travaillé ou fait partie de l'entreprise.
      </h2>
      <div className="slider">
        {cards.map((card, index) => (
          <WorkCard
            key={index}
            name={card.name}
            img={card.img}
            link={card.link}
            tags={card.tags}
          />
        ))}
      </div>
    </section>
  );
}

export default MyWorks;
