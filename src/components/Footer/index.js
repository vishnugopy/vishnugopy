import { Link } from "react-router-dom";
import "./style.scss";

function Footer() {
  return (
    <section className="footer">
      <p>Ce site est réalisé avec ❤️ par Vishnu Gopy</p>
      <Link to="/privacy">Politique de confidentialité</Link>
    </section>
  );
}

export default Footer;
