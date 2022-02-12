import "./style.scss";
import Card from "./Card";


function MyApps() {
  const cards = [
    {
      name: "ToDo",
      img: "https://play-lh.googleusercontent.com/l1Snh_4mtz7gThE7qcOcCmNdBzn9SsjLllqFvJCwaMWk1cSNPgCrfETNE74DbdgTsA=s180-rw",
      link: "https://play.google.com/store/apps/details?id=com.stupidversion.todo",
    },
    {
      name: "UpDown",
      img: "https://play-lh.googleusercontent.com/kiRbL8iWAc5S9xMP-jwQUmR1WTg-rpoZZBk6s5clBF3FBDRzj7LyyOXTXTKoGXXzPKs",
      link: "https://play.google.com/store/apps/details?id=com.stupidversion.updown",
    },
    
  ];

  return (
    <section className="maislider">
      <h2>Mes applications sur play store</h2>
      <div className="slider">
        {cards.map((card, index) => (
          <Card key={index} name={card.name} img={card.img} link={card.link} />
        ))}
      </div>
    </section>
  );
}

export default MyApps;
