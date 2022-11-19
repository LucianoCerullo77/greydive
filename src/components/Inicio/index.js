import React from "react";
import Container from "react-bootstrap/Container";

function Inicio() {
  return (
    <>
      <Container className="flex justify-content-center align-items-center text-center">
        <h2 className="mt-2">GreyDive Challenge</h2>
        <h3 className="mt-4">
          Prueba de Frontend de Luciano Cerullo para GreyDive
        </h3>
        <p className="mt-4">Para ver interactuar, hacer click en Items</p>
      </Container>
    </>
  );
}

export default Inicio;
