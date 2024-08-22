import LandingPage from "./pages/LandingPage";
import LogicalTest from "./pages/LogicalPages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonPage from "./pages/PokemontPage";
import ReduxPage from "./pages/ReduxPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/logicaltest" element={<LogicalTest />}/>
        <Route path="/pokemontest" element={<PokemonPage />}/>
        <Route path="/learning-redux" element={<ReduxPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
