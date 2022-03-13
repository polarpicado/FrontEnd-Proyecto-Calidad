import React from 'react';
import img from '../../assets/imagenes/medicina.png'
import './detalleCarrera.css'
export default function detalleCarrera() {

  return (
    <div className='detalleCarrera-contenedor'>
      <div className="detalle-carrera-text">
        <h1>Ingeniería de sistemas</h1>
        <div className="text">
           <p>Vive la experiencia de tratar con la tecnología junto con personas altamente capacitadas.</p>
            <p>Te encontrarás con profesionales haciendo cosas de la vida real y verás el entorno en el cual se desarrollan las actividades de desarrollo de sistemas</p>   
        </div>
        <div className="btn-container">
          <a href="https://chat.whatsapp.com/DNzolhbNreRFwVzdNtq9HX" target="auto_blank" className='btn-request'>Quiero unirme !</a>
        </div>
      </div>
      <div className="imagen">
        <img src={img} alt="" />
      </div>
    </div>
  )
}
