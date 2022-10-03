import "./style.scss";
import WorkCard from "./WorkCard";

function MyWorks() {
  const cards = [
    {
      name: "Swimango , Paris",
      link: "https://www.swimango.com",
      about: "Création d'un site permettant de réserver une piscine en ligne.",
      tags: ["Next", "SQL", "CSS", "SVG", "Animations", "Responsive", "Strip"],
    },
    {
      name: "Ambient It , Paris",
      link: "https://www.ambient-it.net/",
      about:
        "Participation à la création d'un plugin à partir de zéro et j'ai également fait quelques animations avec SVG.",
      tags: ["Php", "HTML", "CSS", "SVG", "Animations", "Responsive"],
    },
    {
      name: "Bpol , Polond",
      link: "https://www.ambient-it.net/",
      about:
        "Participation à la création d'une API pour communiquer avec Google G-suit en utilisant Python et MySQL.",
      tags: ["Php", "HTML", "CSS", "SVG", "Animations", "Responsive"],
    },
    {
      name: "Same Still A Meal , Bordeaux",
      about:
        "Recréation d'un site web WIX avec des réactions qui incluent des paiements. ",
      link: "https://www.samestillameal.com/",
      tags: [
        "React",
        "JavaScript",
        "SCSS",
        "ExpressJs",
        "NodeJs",
        "SQL",
        "Responsive",
      ],
    },
    {
      name: "The Best Talks",
      about: "Maintenir le site et corriger les bugs",
      link: "https://thebesttalks.blogspot.com",
      tags: ["Blogger", "Intergration", "Responsive"],
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
            link={card.link}
            tags={card.tags}
            about={card.about}
          />
        ))}
      </div>
    </section>
  );
}

export default MyWorks;
