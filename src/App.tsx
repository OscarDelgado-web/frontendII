import { HashRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Home } from "./components/Home";
import { Flex } from "./components/Flex";
import { Grid } from "./components/Grid";
import AppComponent from "./components/Apps";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flex" element={<Flex />} />
        <Route path="/grid" element={<Grid />} />
        <Route path="/app" element={<AppComponent />} />
        <Route path="*" element={<h1>Página no encontrada</h1>} />
      </Routes>
    </HashRouter>
  );
}
export default App;
