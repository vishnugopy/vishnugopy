import Toggle from "../ThemeToggle";
import "./style.scss";

function Footer() {
  return (
    <section className="footer">
      <p>Ce site est réalisé avec ❤️ par Vishnu Gopy</p>
      <div className="content">
        <a
          className="download"
          href="./vishnugopy.pdf"
          download="vishnugopy.pdf"
          target="_blanc"
        >
          Télécharger mon curriculum vitae
        </a>
        <Toggle />
      </div>
    </section>
  );
}

export default Footer;
