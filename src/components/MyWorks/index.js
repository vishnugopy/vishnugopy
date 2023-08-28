import "./style.scss";
import WorkCard from "./WorkCard";

function MyWorks() {
  const cards = [
    {
      name: "Class Killer - VSCode Extension",
      link: "https://marketplace.visualstudio.com/items?itemName=Vishnugopy.classkiller",
      about:
        "Class Killer est une extension de Visual Studio Code qui supprime toutes les classes de votre code HTML/React.Cette extension est parfaite pour les développeurs qui souhaitent supprimer les classes Tailwind de leur code HTML/React.",
      tags: [
        "Mon Projet",
        "2023",
        "JavaScript",
        "VSCode",
        "Extension",
        "ChatGpt3",
      ],
    },
    {
      name: "ToDo - Application Android ",
      link: "https://play.google.com/store/apps/details?id=com.stupidversion.todo",
      about:
        "Une application simple où vous pouvez ajouter votre liste de tâches quotidiennes et lorsque vous avez terminé, vous pouvez la supprimer définitivement , Toutes vos données sont stockées sur votre propre appareil afin que personne d'autre ne puisse les voir.",
      tags: ["Mon Projet", "2021", "React Native", "JavaScript", "CSS"],
    },
    {
      name: "Up Down - Application Android ",
      link: "https://play.google.com/store/apps/details?id=com.stupidversion.updown",
      about:
        "Une application mobile qui vous aide à compter et à suivre vos pompes.  L'application offre également des fonctionnalités telles qu'un historique de vos séances d'entraînement, ce qui vous permet de rester motivé. Avec son interface utilisateur simple et intuitive, Il est un excellent outil pour tous ceux qui cherchent à améliorer leur condition physique ou leurs performances en matière de pompes.",
      tags: ["Mon Projet", "2021", "React Native", "JavaScript", "CSS"],
    },
    {
      name: "Swimango , Paris - Site Web",
      link: "https://www.swimango.com",
      about:
        "J'ai développé un site web pour la réservation de piscines en ligne, simplifiant le processus en quelques clics. Les utilisateurs peuvent choisir leur piscine, l'heure et la durée facilement, offrant une expérience sans tracas. Profitez de la natation en réservant facilement.",
      tags: [
        "Opportunité",
        "2021",
        "Next",
        "SQL",
        "CSS",
        "SVG",
        "Animations",
        "Responsive",
        "stripe",
        "FullStack",
      ],
    },
    {
      name: "Gando , Paris - Site Web",
      link: "https://mygando.com/",
      about:
        "Création d'un site permettant de louer des voitures en ligne dans les villes guadeloupe , Guyane , Réunion et Martinique.",
      tags: [
        "Opportunité",
        "2023",
        "React",
        "NoSQL",
        "CSS",
        "SVG",
        "Animations",
        "Responsive",
        "stripe",
        "firebase",
        "FullStack",
      ],
    },
    {
      name: "Ambient It , Paris - Site Web",
      link: "https://www.ambient-it.net/",
      about:
        "Participation à la création d'un plugin à partir de zéro et j'ai également fait quelques animations avec SVG.",
      tags: [
        "Opportunité",
        "2020",
        "Php",
        "HTML",
        "CSS",
        "SVG",
        "Animations",
        "Responsive",
      ],
    },
    {
      name: "Bpol , Polond - Site Web",
      link: "https://www.ambient-it.net/",
      about:
        "Participation à la création d'une API pour communiquer avec Google G-suit en utilisant Python et MySQL.",
      tags: [
        "Opportunité",
        "2020",
        "Php",
        "HTML",
        "CSS",
        "SVG",
        "Animations",
        "Responsive",
      ],
    },
    {
      name: "Same Still A Meal , Bordeaux - Site Web",
      about:
        "Recréer un site WIX en React pour faciliter l'expérience de l'utilisateur et de l'administrateur. ",
      link: "https://www.samestillameal.com/",
      tags: [
        "Opportunité",
        "2021",
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
      about: "Ajout de contenu et maintenance du site et correction des bugs.",
      link: "https://thebesttalks.blogspot.com",
      tags: ["Opportunité", "2022", "Blogger", "Intergration", "Responsive"],
    },
  ];

  return (
    <section className="maislider">
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
