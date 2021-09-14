import logo from './logo.svg';
import './App.scss';

import Box from './components/Box';
import Name from './components/Name';
import Profile from './components/Profile';

function App() {
  return (
    <main className="AppBody">
      <Box children={<Name/>} />
      <Box children={<Profile/>} />
     
    </main>
  );
}

export default App;
