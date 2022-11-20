import React from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import useClient from "../../hooks/useClient";
import Preguntas from "../Preguntas";

function User() {
  const { id } = useParams();

  const { info, loading } = useClient(id);

  return (
    <>
      <Container className="text-center">
        {loading ? (
          <h1 className="text-center">Loading...</h1>
        ) : (
          <>
            <Container className="my-4 py-2 shadow rounded bg-dark text-white">
              <h2 className="my-4 mx-2">Resultado</h2>
              <h4 className="my-4 mx-2">Cliente : {info.cliente}</h4>
              <h4 className="my-4 mx-2">Testeador : {info.plataforma}</h4>
              <h4 className="my-4 mx-2">URL del Video : {info.linkVideo}</h4>
              <p className="my-4 mx-2">Tarea : {info.escenario}</p>
              <p className="my-4 mx-2">Duracion total : {info.timeTest}</p>
              {/* <p className="my-4 mx-2">Transcripcion : {info.transcripcion}</p> */}
            </Container>

            {info?.preguntas?.map((pregunta) => {
              return (
                <Preguntas
                  tiempo={pregunta.tiempo}
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
