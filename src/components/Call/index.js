import "./style.scss";
import CallRoundedIcon from "@material-ui/icons/CallRounded";

const Call = () => {
  return (
    <div className="divider">
      <a href="tel:0033663376422" className="call-icon">
        <CallRoundedIcon />
        <p>0663376422</p>
      </a>
    </div>
  );
};

export default Call;
