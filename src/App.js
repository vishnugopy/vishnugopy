import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Signature from "./pages/Sign/index.js";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/sign" element={<Signature />} />
      </Routes>
    </Router>
  );
}

export default App;
