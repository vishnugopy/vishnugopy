import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PlayGround from "./pages/PlayGround";

import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/playground" element={<PlayGround />} />
      </Routes>
    </Router>
  );
}

export default App;
