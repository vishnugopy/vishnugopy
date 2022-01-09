import { useEffect, useState } from "react";
import "./style.scss";

import Box from "../../components/CvComponents/Box";
import Name from "../../components/CvComponents/Name";
import Profile from "../../components/CvComponents/Profile";
import Formation from "../../components/CvComponents/Formation";
import Experience from "../../components/CvComponents/Experience";
import Competences from "../../components/CvComponents/Competences";
import Loisir from "../../components/CvComponents/Loisir";
import Langues from "../../components/CvComponents/Langues";
import Call from "../../components/CvComponents/Call";
import Mail from "../../components/CvComponents/Mail";
import Github from "../../components/CvComponents/Github";
import Linkedin from "../../components/CvComponents/Linkedin";
import Twitter from "../../components/CvComponents/Twitter";

function PlayGround() {
  const [AllBoxes, setAllBoxes] = useState([]);

  useEffect(() => {
    const Boxes = document.querySelectorAll(".box");
    setAllBoxes(Boxes);
  }, []);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  for (let index = 0; index < AllBoxes.length; index++) {
    AllBoxes.forEach((element) => {
      element.style.position = "absolute";
      element.style.animationDelay = index + "0" + getRandomInt(10) + "ms";
      index++;
    });
  }

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
    </section>
  );
}

export default PlayGround;
