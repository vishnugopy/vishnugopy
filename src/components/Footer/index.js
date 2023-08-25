import Toggle from "../ThemeToggle";
import "./style.scss";

function Footer() {
  return (
    <section className="footer">
      <p>Ce site est réalisé avec ❤️ par Vishnu Gopy</p>
      <Toggle />
    </section>
  );
}

export default Footer;
