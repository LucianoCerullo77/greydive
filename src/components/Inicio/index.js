import React from "react";
import Container from "react-bootstrap/Container";

function Inicio() {
  return (
    <>
      <Container className="text-center">
        <h2 className="mt-2 py-2 px-4">GreyDive Challenge</h2>
        <h3 className="mt-2 py-4 px-4">
          Prueba de Frontend de Luciano Cerullo para GreyDive
        </h3>
        <p className="mt-4">Para interactuar, hacer click en Items</p>
      </Container>
    </>
  );
}

export default Inicio;
