import React, {useState} from 'react'
import './universitario.css'
import { Link } from 'react-router-dom'
export default function Sniversitario() {
    const [carrerasUni,setCarrerasUni] =useState([
        {
            id:1,
            nombre:"Medicina",
            desc:"Aprende y vive la experiencia junto a profesionales",
            img: "https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg"
        },
        {
            id:2,
            nombre:"Ing. biomedica",
            desc:"Aprende y vive la experiencia junto a profesionales en el rubro industrial",
            img: "https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg"
        },
        {
            id:3,
            nombre:"Videojuegos",
            desc:"loremloremloremloremloremloremloremloremloremloremlorem",
            img: "https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg"
        },
        {
            id:4,
            nombre:"Cinematografía",
            desc:"loremloremloremloremloremloremloremloremloremloremlorem",
            img: "https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg"
        }
    ]) 
  return (
    <div className="carreras-uni">
        <h1>Conoce las carreras en las que puedes hacer voluntariado como estudiante universitario</h1>
        <p>Encuentra y participa en las experiencias relacionadas a distintas carreras profesionales</p>

        <div className="tarjetas-container">{
            carrerasUni.map(cObj=>( 
                <div className="card" key={cObj.id}>
                    <div className="card-image">
                        <img src={cObj.img} alt="" />
                        <div className="card-text-container">
                            <div className="card-text">
                                <h1>{cObj.nombre}</h1>
                                <p>{cObj.desc}</p>  
                                <div className="btn-container">
                                    <Link to="/detalleCarrera"  className='btn-request'>Solicitar</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
        </div>
    </div>
  )
}
