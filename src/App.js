import './App.scss';
import { useEffect , useState } from 'react';

import Box from './components/Box';
import Name from './components/Name';
import Profile from './components/Profile';
import Formation from './components/Formation';
import Experience from './components/Experience';
import Competences from './components/Competences';
import Loisir from './components/Loisir';
import Langues from './components/Langues';
import Call from './components/Call';
import Mail from './components/Mail';
import Github from './components/Github';
import Linkedin from './components/Linkedin';
import Twitter from './components/Twitter';



function App() {

  const [AllBoxes, setAllBoxes] = useState([]);
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
 
  useEffect(() => {
    const Boxes = document.querySelectorAll('.box');
    setAllBoxes(Boxes);
  }, []);
  
  const width = window.screen.availWidth- 300;
  const height = window.screen.availHeight - 300;
 
  AllBoxes.forEach(element => {
    element.style.position ="absolute";
    element.style.left = getRandomInt(width) + "px";
    element.style.top = getRandomInt(height) + "px"
  });

  

  return (
    <main className="AppBody">
      <Box children={<Name/>} />
      <Box children={<Profile/>} />
      <Box children={<Formation/>} />
      <Box children={<Experience/>} />
      <Box children={<Competences/>} />
      <Box children={<Langues/>} />
      <Box children={<Loisir/>} />
      <Box children={<Call/>} />
      <Box children={<Mail/>} />
      <Box children={<Github/>} />
      <Box children={<Linkedin/>} />
      <Box children={<Twitter/>} />
    </main>
  );
}

export default App;
