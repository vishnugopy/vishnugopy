import { useEffect, useState } from "react";
import "./style.scss";

import Box from "../CvComponents/Box";
import Name from "../CvComponents/Name";
import Profile from "../CvComponents/Profile";
import Formation from "../CvComponents/Formation";
import Experience from "../CvComponents/Experience";
import Competences from "../CvComponents/Competences";
import Loisir from "../CvComponents/Loisir";
import Langues from "../CvComponents/Langues";
import Call from "../CvComponents/Call";
import Mail from "../CvComponents/Mail";
import Github from "../CvComponents/Github";
import Linkedin from "../CvComponents/Linkedin";
import Twitter from "../CvComponents/Twitter";
import Theme from "../CvComponents/Theme";

function CV() {
  const [AllBoxes, setAllBoxes] = useState([]);
  const [frame, setFrame] = useState("");
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  useEffect(() => {
    const Boxes = document.querySelectorAll(".box");
    const currentFrame = document.querySelector(".cvsection");
    setFrame(currentFrame);
    setAllBoxes(Boxes);
  }, []);

 
  const width = window.screen.availWidth- 500;
  const height = window.screen.availHeight - 300;
 
  AllBoxes.forEach(element => {
    element.style.position ="absolute";
    element.style.left = getRandomInt(width) + "px";
    element.style.top = getRandomInt(height) + "px";
  });


  return (
    <section className="cvsection">
      <Box children={<Name />} />
      <Box children={<Profile />} />
      <Box children={<Formation />} />
      <Box children={<Experience />} />
      <Box children={<Competences />} />
      <Box children={<Langues />} />
      <Box children={<Loisir />} />
      <Box children={<Call />} />
      <Box children={<Mail />} />
      <Box children={<Github />} />
      <Box children={<Linkedin />} />
      <Box children={<Twitter />} />
      <Theme />
    </section>
  );
}

export default CV;
