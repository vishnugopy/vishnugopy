import "./style.scss";
import WorkCard from "./WorkCard";

function MyWorks() {
  const cards = [
    {
      name: "Ambient It",
      img: "https://www.ambient-it.net/wp-content/uploads/2016/04/logo-final-web.png",
      link: "https://www.ambient-it.net/",
    },
    {
      name: "Samestillameal",
      img: "https://static.wixstatic.com/media/21c4d2_2be3f6617f5a4d01892d93a118d1c286~mv2.png/v1/fill/w_84,h_84,al_c,q_85,usm_0.66_1.00_0.01/SAME-logoCercleJaune2%202.webp",
      link: "https://www.samestillameal.com/",
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
