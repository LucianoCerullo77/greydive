import React from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
// import Row from "react-bootstrap/esm/Row";
// import Col from "react-bootstrap/esm/Col";
import useClient from "../../hooks/useClient";
import Preguntas from "../Preguntas";

function User() {
  const { id } = useParams();

  const { info, loading } = useClient(id);

  return (
    <>
      <Container className="text-center">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <h2 className="mt-4">Resultado</h2>
            <h4>Cliente : {info.cliente}</h4>
            <h4>Testeador : {info.plataforma}</h4>
            <h4>URL del Video : {info.linkVideo}</h4>
            <p>Tarea : {info.escenario}</p>
            <p>Duracion de la Tarea : {info.timeTest}</p>
            <hr />

            {info?.preguntas?.map((pregunta) => {
              return (
                      <Preguntas
                        tiempo={pregunta.tiempo}
                        tarea={pregunta.tipoTarea}
                        respuesta={pregunta.respuesta}
                        texto={pregunta.texto}
                      />
              );
            })}
          </>
        )}
      </Container>
    </>
  );
}

export default User;
