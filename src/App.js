import React from "react";
import Container from "react-bootstrap/Container";
import ItemList from "./components/itemList/ItemList";
import Inicio from "./components/Inicio/Inicio";
import Resultado from "./components/resultado/Resultado";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Container className="text-center justify-content-center align-content-center mt-2">
            <NavLink
              to="/"
              className="btn btn-dark mx-2"
              activeclassname="active"
            >
              Inicio
            </NavLink>
            <NavLink to="/items" className="btn btn-dark mx-2">
              Items
            </NavLink>
            <NavLink to="/resultado" className="btn btn-dark mx-2">
              Resultado
            </NavLink>
          </Container>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/items" element={<ItemList />} />
            <Route path="/resultado" element={<Resultado />} />
            <Route path="/resultado/:id" element={<Resultado />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
