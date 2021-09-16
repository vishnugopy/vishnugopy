import logo from './logo.svg';
import './App.scss';

import Box from './components/Box';
import Name from './components/Name';
import Profile from './components/Profile';
import Formation from './components/Formation';
import Experience from './components/Experience';
import Competences from './components/Competences';

function App() {
  return (
    <main className="AppBody">
      <Box children={<Name/>} />
      <Box children={<Profile/>} />
      <Box children={<Formation/>} />
      <Box children={<Experience/>} />
      <Box children={<Competences/>} />
     
    </main>
  );
}

export default App;
