import Toggle from "../ThemeToggle";
import "./style.scss";
import { Link } from "react-router-dom";

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
        <Link to="/sign" className="contact">
          Help riva
        </Link>
      </div>
    </section>
  );
}

export default Footer;
