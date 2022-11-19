import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import db from "../../data/db";

function ItemList() {
  return (
    <>
      <Container className="text-center">
        <h2 className="mt-2">Items</h2>
        <ul>
          {db.map((item) => (
            <li key={item.cliente}>
              <Link to={`/resultado/${item.cliente}`}>
                {item.cliente} - {item.plataforma}
              </Link>
            </li>
          ))}
        </ul>
        <p>Para volver al Inicio, hacer click en el boton Inicio</p>
      </Container>
    </>
  );
}

export default ItemList;
