import Toggle from "../ThemeToggle";
import "./style.scss";

function Footer() {
  return (
    <section className="footer">
      <p>Ce site est réalisé avec ❤️ par Vishnu Gopy</p>
      <div className="content">
        <a className="download" href="./Vishnugopy.pdf" download>
          Télécharger mon curriculum vitae
        </a>
        <Toggle />
      </div>
    </section>
  );
}

export default Footer;
