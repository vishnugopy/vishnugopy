import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Privacy from "./pages/Privacy";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;
