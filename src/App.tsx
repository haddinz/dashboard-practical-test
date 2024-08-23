import LandingPage from "./pages/LandingPage";
import LogicalTest from "./pages/LogicalPages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonPage from "./pages/PokemontPage";
import ReduxPage from "./pages/ReduxPage";
import GetProduct from "./pages/Product/GetProduct";
import EditProduct from "./pages/Product/EditProduct";
import AddProduct from "./pages/Product/AddProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/logicaltest" element={<LogicalTest />}/>
        <Route path="/pokemontest" element={<PokemonPage />}/>
        <Route path="/learning-redux" element={<ReduxPage />}/>
        <Route path="/product/get-product" element={<GetProduct />}/>
        <Route path="/product/edit/:id" element={<EditProduct />}/>
        <Route path="/product/add-product" element={<AddProduct />}/>
      </Routes>
    </Router>
  );
}

export default App;
