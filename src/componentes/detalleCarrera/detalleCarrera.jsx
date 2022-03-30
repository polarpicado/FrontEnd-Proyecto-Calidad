import React from "react";
import "./detalleCarrera.css";
function DetalleCarrera() {
  return (
    <div className="contenedor-detalle-carrera">
      <div className="seccion-texto">
        <h1 className="carrera">Ingeniería en Sistemas</h1>
        <p className="descrip-corta">
          Simplifica y soluciona situaciones complejas y facilita el desempeño
          de todo tipo de organizaciones.
        </p>
        <p className="descrip-larga">
          Desarrolla tu formación y conocimientos en el área de las ciencias de
          la computación, ingeniería de software y nuevas tecnologías de
          información. Conviértete en un profesional dedicado a la resolución de
          problemas complejos y del manejo de herramientas para la optimización
          de procesos organizacionales, buscando siempre cubrir las necesidades
          presentes y futuras de tus clientes.
        </p>
        <button className="co-volun">Contacta con un voluntario</button>
      </div>
      <div className="seccion-imagen">
        <img
          className="imagen-carrera"
          src="https://gruposim.eu/wp-content/uploads/2021/11/avances-industria-mueble-500x500.jpg"
        />
      </div>
    </div>
  );
}
export default DetalleCarrera;
