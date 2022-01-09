import "./style.scss";

function SocialButtons() {
  return (
    <section className="SocialButtons">
      <a href="mailto:vishnugoby0010@gmail.com" className="linkbutton">
        <span className="material-icons">alternate_email</span>
        <p className="linkname">Email</p>
      </a>

      <a href="tel:0663376422" className="linkbutton">
        <span className="material-icons">local_phone</span>
        <p className="linkname">Call</p>
      </a>

      <a href="https://goo.gl/maps/KZydxKouq5si5raeA" className="linkbutton">
        <span className="material-icons">location_on</span>
        <p className="linkname">Adresse</p>
      </a>

      <a
        href="https://www.paypal.com/paypalme/vishnugopy"
        className="linkbutton"
      >
        <span className="material-icons">attach_money</span>
        <p className="linkname">Don</p>
      </a>
    </section>
  );
}

export default SocialButtons;
