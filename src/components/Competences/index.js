import "./style.scss";

const Competences = (props) => {
  return (
    <div className="competences">
      <h2>COMPÉTENCES TECHNIQUES</h2>

      <div>
        <h3>Développement Web</h3>
        <ul>
          <li>Javascript</li>
          <ul>
            <li>Node</li>
            <li>Express</li>
            <li>React</li>
          </ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>SCSS/SASS</li>
          <li>SVG</li>
          <li>Wordpress</li>
          <li>SQL</li>
          <li>Typographie</li>
        </ul>
      </div>

      <div>
        <h3>Modélisation en 3d</h3>
        <ul>
          <li>Blender</li>
        </ul>
      </div>

      <div>
        <h3>Montage Photo et Vidéo</h3>
        <ul>
          <li>Pack Adobe</li>
        </ul>
      </div>

      <div>
        <h3>Réparation Ordinateurs</h3>
      </div>
    </div>
  );
};

export default Competences;
