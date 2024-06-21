import React from "react";
import "./sign.scss"; // Import your CSS or SCSS file
import logo from "../../assets/img/logo.png"; // Import your image

function Signature() {
  return (
    <div className="gmail">
      <img src={logo} alt="Gmail Logo" />
    </div>
  );
}

export default Signature;
