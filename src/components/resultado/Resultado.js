import React from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";

function User() {
  const { id } = useParams();
  console.log(id);

  const [info, setInfo] = React.useState([]);

  React.useEffect(() => {
    const obtenerData = async () => {
      const dataList = await fetch(`../../data/db.json`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
      const data = await dataList.json();
      setInfo(data);
    };

    obtenerData();
  }, [id]);

  return (
    <>
      <Container className="text-center">
        <h2 className="mt-4">Resultado</h2>
        <h4>Cliente : {info.cliente}</h4>
        <h4>Testeador : {info.website}</h4>
        <h4>URL del Video : {info.linkVideo}</h4>
        {/* <p>Tarea : {info.escenario}</p>
      <p>Duracion de la Tarea : {info.preguntas.tiempo}</p> */}
      </Container>
    </>
  );
}

export default User;
