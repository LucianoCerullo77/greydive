import React from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Preguntas({ tiempo, respuesta, texto }) {
  return (
    <>
      <Container>
        <Row>
          <Col lg={8}>
            <Card className="my-2 shadow rounded" border="secondary">
              <Card.Body>
                <Card.Title>Demostracion</Card.Title>
                <Card.Text>
                  Aca se hizo un mapeo de db.json, por lo cual se muestra a la
                  derecha el resultado de la consulta
                </Card.Text>
                <Card.Text>
                  En el mismo se muestra el tipo de Tares, la Respuesta y el
                  Tiempo
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="my-2 shadow rounded" bg="light" border="danger">
              <Card.Body>
                <Card.Title>Preguntas</Card.Title>
                <Card.Text>Tarea : {texto}</Card.Text>
                <Card.Text>Respuesta : {respuesta}</Card.Text>
                <Card.Text>Tiempo : {tiempo}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Preguntas;
