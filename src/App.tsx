import LandingPage from "./pages/LandingPage";
import LogicalTest from "./pages/LogicalPages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonPage from "./pages/PokemontPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/logicaltest" element={<LogicalTest />}/>
        <Route path="/pokemontest" element={<PokemonPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
