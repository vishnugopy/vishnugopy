import logo from './logo.svg';
import './App.scss';

import Box from './components/Box';
import Name from './components/Name';

function App() {
  return (
    <main className="AppBody">
      <Box children={<Name/>} />
     
    </main>
  );
}

export default App;
