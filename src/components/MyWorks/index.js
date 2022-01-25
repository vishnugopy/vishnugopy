import "./style.scss";
import WorkCard from "./WorkCard";

function MyWorks() {
  const cards = [
    {
      name: "Ambient It",
      link: "https://www.ambient-it.net/",
    },
    {
      name: "Same Still A Meal",
      link: "https://www.samestillameal.com/",
    },
    {
      name: "The Best Talks",
      link: "https://thebesttalks.blogspot.com",
    }
  ];

  return (
    <section className="maislider">
      <h2>
        Les sites sur lesquels j'ai travaillé ou fait partie de l'entreprise.
      </h2>
      <div className="slider">
        {cards.map((card, index) => (
          <WorkCard key={index} name={card.name} img={card.img} link={card.link}  />
        ))}
      </div>
    </section>
  );
}

export default MyWorks;
