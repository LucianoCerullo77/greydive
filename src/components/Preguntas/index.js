import React from 'react'

function Preguntas({tiempo, tipoTarea, respuesta, texto}) {
  return (
    <>
      <h2>Preguntas</h2>
      <p>Tarea : {tipoTarea}</p>
      <p>Tiempo : {tiempo}</p>
      <p>Texto : {texto}</p>
      <p>Respuesta : {respuesta}</p>
    </>
  );
}

export default Preguntas