import "./style.scss";
import GitHubIcon from '@material-ui/icons/GitHub';

const Github = () => {
  return (
    <div className="social">
      <a href="https://github.com/vishnugopy">
        <GitHubIcon />
        <p>Vishnugopy</p>
      </a>
    </div>
  );
};

export default Github;
