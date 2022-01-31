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
      img: "https://static.wixstatic.com/media/21c4d2_4b83b16c001d4a3d9683f73757e1ff26~mv2.png/v1/fill/w_84,h_84,al_c,q_85,usm_0.66_1.00_0.01/Logo%20sans%20baseline%20RVB%20(1).webp",
      tags: ["React" , "JavaScript", "SCSS", "ExpressJs", "NodeJs" , "SQL" , "Responsive"],
    },
    {
      name: "The Best Talks",
      link: "https://thebesttalks.blogspot.com",
      img: webicon,
      tags: ["Blogger" , "Intergration", "SCSS", "ExpressJs", "NodeJs"],
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
