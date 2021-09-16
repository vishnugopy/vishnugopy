import "./style.scss";
import AlternateEmailRoundedIcon from '@material-ui/icons/AlternateEmailRounded';

const Mail = () => {
  return (
    <div className="divider">
      <a href="mailto:vishnugoby0010@gmail.com" className="call-icon">
        <AlternateEmailRoundedIcon />
        <p>vishnugoby0010@gmail.com</p>
      </a>
    </div>
  );
};

export default Mail;
