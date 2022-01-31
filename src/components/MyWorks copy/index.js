import "./style.scss";
import WorkCard from "./WorkCard";

function TakeAways() {
  const Ressources = [
    {
      name: "Ambient It",
      link: "https://www.ambient-it.net/",
      img: "https://www.ambient-it.net/wp-content/uploads/2019/01/logo-ambient-it.png",
    },
    {
      name: "Same Still A Meal",
      link: "https://www.samestillameal.com/",
      img : "https://www.samestillameal.com/wp-content/uploads/2019/01/logo-samestillameal.png",
    },
    {
      name: "The Best Talks",
      link: "https://thebesttalks.blogspot.com",
      img : "https://thebesttalks.blogspot.com/wp-content/uploads/2019/01/logo-thebesttalks.png",
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
