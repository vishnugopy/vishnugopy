import "./style.scss";

import SocialButtons from "../../components/SocialButtons";
import MyWorks from "../../components/MyWorks";
import Footer from "../../components/Footer";

function HomePage() {
  return (
    <section className="home">
      <main>
        <div className="heroSection">
          <div className="myName">
            <h1>V</h1>
            <h1>I</h1>
            <h1>S</h1>
            <h1>H</h1>
            <h1>N</h1>
            <h1>U</h1>
            <h1>G</h1>
            <h1>O</h1>
            <h1>P</h1>
            <h1>Y</h1>
          </div>
          <div className="positions">
            <span className="my-position">
              Concepteur et developpeur d'applications web
            </span>
          </div>

          <SocialButtons />
        </div>
        <MyWorks />
        <Footer />
      </main>
    </section>
  );
}

export default HomePage;
