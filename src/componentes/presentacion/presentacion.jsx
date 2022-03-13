import React from 'react'
import './presentacion.css'
import secunBg from '../../assets/imagenes/secun-bg.png'
import { Link } from "react-router-dom";
export default function presentacion(props){
  return (
    <div className="presentacion_contenedor">
      <div className="presentacion-info">
        <div className="info">
          <div className="title">
            <h1>{props.title1}</h1>
            <h1>{props.title2}</h1>
          </div>
          <p>Encuentra y participa en las experiencias relacionadas a<br/> distintas carreras profesionales</p>
          <div className="btn-container">
          <Link to={props.to}>Quiero vivir esa experiencia !</Link>
          </div>
        </div>
        <div className="img">
          <img src={secunBg} alt="secundaria img background" />
        </div>
      </div>
    </div>
  )
}
