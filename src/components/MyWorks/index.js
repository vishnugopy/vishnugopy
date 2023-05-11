import "./style.scss";
import WorkCard from "./WorkCard";

function MyWorks() {
  const cards = [
    {
      name: "Class Killer - VSCode Extension",
      link: "https://marketplace.visualstudio.com/items?itemName=Vishnugopy.classkiller",
      about:
        "Class Killer est une extension de Visual Studio Code qui supprime toutes les classes de votre code HTML/React.Cette extension est parfaite pour les développeurs qui souhaitent supprimer les classes Tailwind de leur code HTML/React.",
      tags: ["2023" , "JS" , "VSCode" ],
    },
    {
      name: "ToDo - Application Android ",
      link: "https://play.google.com/store/apps/details?id=com.stupidversion.todo",
      about: "Une application simple où vous pouvez ajouter votre liste de tâches quotidiennes et lorsque vous avez terminé, vous pouvez la supprimer définitivement , Toutes vos données sont stockées sur votre propre appareil afin que personne d'autre ne puisse les voir.",
      tags: ["2021" , "React Native", "JS", "CSS"],
    },
    {
      name: "Up Down - Application Android ",
      link: "https://play.google.com/store/apps/details?id=com.stupidversion.updown",
      about: "Une application mobile qui vous aide à compter et à suivre vos pompes.  L'application offre également des fonctionnalités telles qu'un historique de vos séances d'entraînement, ce qui vous permet de rester motivé. Avec son interface utilisateur simple et intuitive, Il est un excellent outil pour tous ceux qui cherchent à améliorer leur condition physique ou leurs performances en matière de pompes.",
      tags: ["2021" , "React Native", "JS", "CSS"],
    },
    {
      name: "Swimango , Paris - Site Web",
      link: "https://www.swimango.com",
      about: "Création d'un site permettant de réserver une piscine en ligne.",
      tags: ["2021" , "Next", "SQL", "CSS", "SVG", "Animations", "Responsive", "Strip"],
    },
    {
      name: "Ambient It , Paris - Site Web",
      link: "https://www.ambient-it.net/",
      about:
        "Participation à la création d'un plugin à partir de zéro et j'ai également fait quelques animations avec SVG.",
      tags: ["2020" , "Php", "HTML", "CSS", "SVG", "Animations", "Responsive"],
    },
    {
      name: "Bpol , Polond - Site Web",
      link: "https://www.ambient-it.net/",
      about:
        "Participation à la création d'une API pour communiquer avec Google G-suit en utilisant Python et MySQL.",
      tags: ["2020" , "Php", "HTML", "CSS", "SVG", "Animations", "Responsive"],
    },
    {
      name: "Same Still A Meal , Bordeaux - Site Web",
      about:
        "Recréation d'un site web WIX avec des réactions qui incluent des paiements. ",
      link: "https://www.samestillameal.com/",
      tags: [
        "2021" ,
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
      name: "The Best Talks - Site Web",
      about: "Maintenir le site et corriger les bugs",
      link: "https://thebesttalks.blogspot.com",
      tags: ["2022" , "Blogger", "Intergration", "Responsive"],
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
